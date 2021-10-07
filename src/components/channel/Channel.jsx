import s from './Channel.module.css';
import ArticleHeader from '../article-header/ArticleHeader';

function Channel(props) {
    return (
        <article className={s.channels}>
            <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
            <ArticleHeader title={props.title}/>            
        </article>
        );
    }
    
    export default Channel;