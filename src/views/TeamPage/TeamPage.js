import Container from '../../components/Container'
import { Link } from 'react-router-dom';
import team from './TeamData';
import s from './TeamPage.module.css';

export default function Team() {
  return (
    <Container>
     <div className={s.content}>
      <Link to="/" alt="homepage" className={s.close} />
     
      {team.map((i, idx) => (
        <figure key={idx} className={s.figure}>
          <img src={i.photo} alt="" className={s.background} />
          <img src={i.photo} alt={i.fullName} className={s.profile} />
          <figcaption className={s.figcaption}>
            <h3 className={s.fullName}>{i.fullName}</h3>
            <h4 className={s.position}>{i.position}</h4>
            <ul className={s.linkList}>
              <li className={s.item}>
                <a className={s.link} href={i.linkedIn} target="_blank" rel="noreferrer">
                  <i className="ion-social-linkedin-outline"></i>
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href={`mailto:${i.email}`} target="_blank" rel="noreferrer">
                <i className="ion-ios-email-outline"></i>
                </a>
              </li>
              <li className={s.item}>
                <a  className={s.link} href={i.gitHub} target="_blank" rel="noreferrer">
                  <i className="ion-social-github-outline"></i>
                </a>
              </li>
            </ul>
          </figcaption>
        </figure>
      ))}
    </div>
    </Container>
  );
}
