import s from "./ProfileItem.module.css";
import Icons from './../../assets/img/profileNav/sprite.svg';

function ProfileItem (props) {
    return (
        <div className={s.profileWrapper}>
          <div className={s.profileItem}>
            <div className={s.wrapper}>
                <svg className={s.iconSvg}  
                    width={props.width}
                    height={props.height}
                    viewBox={props.viewbox}
                    fill={props.color}>
                    <use href={Icons + `#${props.name}`} />
                </svg>
                <h3 className={s.itemTitle}>{props.title}</h3>
            </div>
            <div className={s.counter} style={props.style}>{props.counter}</div>
          </div>
        </div>
        
    );
  }
  
  export default ProfileItem;