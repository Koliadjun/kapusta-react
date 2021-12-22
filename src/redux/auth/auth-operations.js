import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://kapusta-api-iteam.herokuapp.com/";
// axios.defaults.baseURL = 'http://localhost:5000';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registration = createAsyncThunk(
  'auth/registration',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/registration', {
        email,
        password,
      });
      if (data.newUser.token) token.set(data.newUser.token);

      alert(
        'Registration successful! Please check your email for verification',
      );
      return data.newUser;
    } catch (err) {
      if (err.response.status !== 409) {
        alert('We got some problems with servers. Please try again later');
      }
      if (err.response.status === 409) {
        alert(err.response.data.message);
      }
      return thunkAPI.rejectWithValue(err.response);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/login', {
        email,
        password,
      });
      console.log(`logIn`, data.user.token);
      token.set(data.user.token);
      console.log(
        `axios.defaults.headers.common.Authorization`,
        axios.defaults.headers.common.Authorization,
      );
      return data.user;
    } catch (err) {
      if (err.response.status === 401) {
        alert(err.response.data.message);
      }
      if (err.response.status !== 401) {
        alert(err.response.data.message[0].message);
      }
      return thunkAPI.rejectWithValue({
        data: err.response.data.message,
        status: err.response.status,
        statusText: err.response.statusText,
      });
    }
  },
);

const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.get('/api/auth/logout');
    token.unset();
  } catch (err) {
    return thunkAPI.rejectWithValue({
      data: err.response.data.message,
      status: err.response.status,
      statusText: err.response.statusText,
    });
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.auth.token;

    if (savedToken === null) {
      return thunkAPI.rejectWithValue('we got no token here');
    }
    token.set(savedToken);
    try {
      const { data } = await axios.get('api/auth/current');
      return data;
    } catch (err) {
      if (err.response.status === 401) {
        // alert("Your session expired or user doesn't exist")
        thunkAPI.rejectWithValue({
          data: err.response.data.message,
          status: err.response.status,
          statusText: err.response.statusText,
        });
      }
      if (err.response.status !== 401) {
        alert('Oops, we got an error :( Please try again later.');
        thunkAPI.rejectWithValue({
          data: err.response.data.message,
          status: err.response.status,
          statusText: err.response.statusText,
        });
      }
    }
  },
);

const isGooglingUser = createAsyncThunk(
  'auth/isGooglingUser',
  async (token, thunkAPI) => {
    if (token === null) {
      return thunkAPI.rejectWithValue('we got no token here');
    }
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.get('api/auth/current');
      return data;
    } catch (err) {
      if (err.response.status === 401) {
        alert("Your session expired or user doesn't exist");
        thunkAPI.rejectWithValue({
          data: err.response.data.message,
          status: err.response.status,
          statusText: err.response.statusText,
        });
      }
      if (err.response.status !== 401) {
        alert('Oops, we got an error :( Please try again later.');
        thunkAPI.rejectWithValue({
          data: err.response.data.message,
          status: err.response.status,
          statusText: err.response.statusText,
        });
      }
    }
  },
);

const authOperations = {
  registration,
  logIn,
  logOut,
  fetchCurrentUser,
  isGooglingUser,
};

export default authOperations;

// {/* <form onSubmit={handleSubmit} action="" autoComplete="off">
//         <div>
//           <label className={s.formLabel}>
//             <p className={s.labelText}>
//               Электронная почта:
//             </p>
//             <input
//               onBlur={blurHandler}
//               type="email"
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//               placeholder="your@email.com"
//               className={s.inputEmail}
//               pattern="[A-Za-z0-9._%-+-]+@[A-Za-z0-9._%-+-]+\.[A-Za-z]{2,4}$"
//               title="Email может, сoстоять из букв цифр и обязательного символа '@'"
//               required
//             />
//           </label>
//         </div>
//         <div>
//           <label className={s.formLabel}>
//             <span className={s.labelText}>
//               {passwordDirty && passwordError && (
//                 <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
//                   {errorSymbol}{' '}
//                 </span>
//               )}
//               Пароль:
//             </span>
//             <input
//               onBlur={blurHandler}
//               type="password"
//               name="password"
//               value={values.password}
//               onChange={handleChange}

//               placeholder="Пароль"
//               className={s.inputPassword}
//               pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&.*]{3,}"
//               title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
//               required
//             />
//             {passwordDirty && passwordError && (
//               <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
//                 {passwordError}{' '}
//               </div>
//             )}
//           </label>
//         </div>
//         <div className={s.containerButton}>
//           <Button type="submit" text="ВОЙТИ">login</Button>
//         </div>
//       </form> */}

