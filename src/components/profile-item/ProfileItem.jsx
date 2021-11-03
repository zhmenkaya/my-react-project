import s from "./ProfileItem.module.css";

function ProfileItem (props) {
    return (
      <div className={s.profileItem}>
        <img className={s.itemIcon} src={props.itemIcon} alt="" />
        <span className={s.itemName}>{props.itemName}</span>
      </div>
    );
  }
  
  export default ProfileItem;