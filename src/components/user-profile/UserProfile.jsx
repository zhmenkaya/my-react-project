import s from "./UserProfile.module.scc"

function UserProfile (props) {
    return (
      <div className={s.userProfile}>
        <img className={s.itemIcon} src={props.itemIcon} alt="" />
        <span className={s.itemName}>{props.itemName}</span>
      </div>
    );
  }
  
  export default UserProfile;