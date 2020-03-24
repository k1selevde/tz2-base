import React from 'react'

const News = ({data}) => {
        return (
            <div>
                {data ? <p>Есть новости</p> : <p>Нет новостей</p>}
            </div>
        )
}

export default News;