import React, {useState} from 'react'
import s from './News.module.css'
import NewsCard from "./NewsCard/NewsCard";


const News = (props) =>  {

    const [count, setCount] = useState(1);
    const newsElements = props.news.map(n => <NewsCard title={n.title} body={n.body} id={n.id} />)

    let toddlerValue = React.createRef();

    let submitHandler = () => {
        props.fetchNews(count);
    }

    let toodlerHandler = () => {
        setCount(toddlerValue.current.value)
    }

    return (
        <div className={s.newsContainer}>
            <h4 className={s.newsTitle}>Сколько новостей вы хотите загрузить?</h4>
            <div><input value={count} ref={toddlerValue} onChange={toodlerHandler} id="toddler" type="range"  min="1" max="45" step="1" disabled={props.isLoading}/></div>

            <button className={props.isLoading ? s.disabledFetchBtn : s.fetchBtn} onClick={submitHandler} disabled={props.isLoading}>Загрузить <div className={s.newsCount}>{count}</div> новостей</button>
            <div className="cards">
                {props.isLoading && <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
                {newsElements}
            </div>
        </div>
        )
}

export default News;