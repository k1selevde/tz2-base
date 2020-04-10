import React from 'react'

type PropsType = {
    title: string
    body: string
    id: number
}

const NewsCard: React.FC<PropsType> = ({id,body,title}) => {
    return (
        <div className="card" style={{marginTop: '20px'}}>
            <div className="card-body">
                <p className="btn btn-success">{id}</p>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
            </div>
        </div>
    )
}

export default NewsCard;