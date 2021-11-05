import s from './profile-icon/ProfileItem.module.css';
import Icons from './../../assets/img/profileNav/sprite.svg';

export const Icon = ({ name, color, size }) => {
    return (
      <svg style={{position: 'absolute'}} width={size} viewBox="0 0 1000 500" fill={color}>
        <use href={Icons + `#${name}`} />
      </svg>
    )
   }