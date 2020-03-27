import React from 'react'

const NewsCard = ({title,body,id}) => {
    return (
        <div class="card" style={{marginTop: '20px'}}>
            <div class="card-body">
                <p class="btn btn-success">{id}</p>
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{body}</p>
            </div>
        </div>
    )
}

export default NewsCard;