import { ReactComponent as GoogleIcon } from '../../images/svg/google.svg';
import s from './GoogleAuth.module.css';

const GoogleAuth = () => {
  return (
    <>
      <a
        href={`https://kapusta-api-iteam.herokuapp.com/api/auth/google`}
        className={s.buttonGoogle}
      >
        <GoogleIcon className={s.googleSvg} />
        Google
      </a>
    </>
  );
};

export default GoogleAuth;
