import './Headline.css';
import likeIcon from "./../../assets/img/like-icon.svg";
import dislikeIcon from "./../../assets/img/dislike-icon.svg";
import clockIcon from "./../../assets/img/clock.svg";

function Headline(props) {
return (
    <article className="headline">
        <img className="thumbnail-img" src={props.thumbnail} alt="" />
        <div className="info">
            <h1 className="title">{props.title}</h1>
            <div className="rating">
                <div className="like">
                    <img className="like-icon" src={likeIcon} alt="" />
                    <span className="text">10.8k</span>
                </div>
                <div className="dislike">
                    <img className="like-icon" src={dislikeIcon} alt="" />
                    <span className="text">1.4k</span>
                    </div>
            </div>
            <div className="wrapper">
                <span style={props.style} className="label">{props.label}</span>
                <div className="time">
                    <img  className="time-icon" src={clockIcon} alt="" />
                    <span className="time-text">2:00 pm</span>
                </div>
            </div>
        </div>
    </article>
    );
}

export default Headline;