const getIsLoggedIn = (state) => {
  return state.auth.token ? true : false;
};
const getName = (state) => state.auth.user.name;
const getIsFetchingUser = (state) => state.auth.isFetchingUser;
const getEmail = (state) => state.auth.email;
const getIsGooglingUser = (state) => state.auth.isGooglingUser;
const getIsGoogled = (state) => state.auth.isGoogled;
const getToken = (state) => state.auth.token;


const authSelectors = {
  getIsLoggedIn,
  getName,
  getIsFetchingUser,
  getIsGooglingUser,
  getEmail,
  getIsGoogled,
  getToken
};

export default authSelectors;
