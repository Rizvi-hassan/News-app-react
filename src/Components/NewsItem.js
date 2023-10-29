import React from 'react'

const NewsItem = (props)=>{
        let {title, description, imgUrl, newsUrl, author, date, source} = props;
        return (
            <div className="my-3">
                <div className="card" style={{background: 'gainsboro', minHeight: '30rem'}}>
                    <img src={imgUrl} className="card-img-top" alt="error" style={{height: '14rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...  <small className="text-body-secondary" id="source">{source}</small></h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-body-secondary">By {author? author: 'Anonymus'} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark btn-sm">Read more &#8663;</a>
                        </div>
                </div>
            </div>
    )
}

export default NewsItem
