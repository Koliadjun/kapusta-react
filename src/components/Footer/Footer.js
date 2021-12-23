import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';
import Container from 'components/Container';

export default function Header() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.section}>
        <NavLink to="/developers" className={s.link}>
          <span className={s.text}> Developed with </span>
          <i className="ion-ios-heart"></i>
          <span className={s.text}>by GoIT Students</span>
        </NavLink>
        </div>
      </Container>
    </footer>
  );
}
