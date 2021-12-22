import { ReactComponent as GoogleIcon } from '../../images/svg/google.svg';
import s from './GoogleAuth.module.css';

const GoogleAuth = () => {
  return (
    <>
      <a href={`http://localhost:5000/api/auth/google`} className={s.buttonGoogle}>
        <GoogleIcon className={s.googleSvg} />
        Google
      </a>
    </>
  );
};

export default GoogleAuth;
