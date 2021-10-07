import s from './NavElement.module.css';

function NavElement (props) {
    return (
      <article className={s.navElement}>
        <img className={s.navIcon} src={props.navIcon} alt="" />
        <span className={s.navName}>{props.navName}</span>
      </article>
    );
  }
  
  export default NavElement;