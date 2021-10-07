import s from './New.module.css';
import ArticleHeader from '../article-header/ArticleHeader';
import Label from '../label/Label';
import Time from '../time/Time';

function New (props) {
    return (
      <article className={s.new}>
        <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
        <div className={s.info}>
            <ArticleHeader style={props.titleStyle} title={props.title}/>
            <div className={s.wrapper}>
                <Label style={props.style} label={props.label}/>
                <Time/>
            </div>
        </div>
      </article>
    );
  }
  
  export default New;