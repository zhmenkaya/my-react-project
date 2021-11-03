import s from "./SectionTitle.module.css";

function SectionTitle(props) {
    return (
        <div className={s.sectionTitle}>
            <h2 className={s.blockTtitle}>{props.title}</h2>
            <button className={s.btn}>See all</button>
        </div>
            );
}
export default SectionTitle;