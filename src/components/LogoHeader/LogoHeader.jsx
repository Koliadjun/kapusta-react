import { Link } from 'react-router-dom';
import s from './LogoHeader.module.css';

export default function logoHeader() {
  return (
    <Link to="/">
      <span className={s.link} aria-label="Логотип сайта"></span>
    </Link>
  );
}
