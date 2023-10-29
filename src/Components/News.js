import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




const News = (props)=> {
    const[articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    
    const upadatePage = async (curpage) => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${curpage}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setPage(curpage)
        setLoading(false)
        setTotalPages(Math.ceil(parsedData.totalResults / 20))
    }

    useEffect (()=>{
        
        upadatePage(1)
            
    }, [])

    const capitalise = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const fetchMoreData = async () => {
        upadatePage(page + 1)
    }
        return (
        <div>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={page < totalPages}
                endMessage={!loading && <p className="text-body-primary" style={{ display: 'block', width: "100px", margin: '10px auto', fontWeight: 'bold', textDecoration: 'underline' }}>End of page</p>}
            >

                <div className='container'>
                    <h2 className="text-center text-light" style={{ marginTop: '80px' }} > News Panda - {capitalise(props.category)} </h2>
                    <div className="row justify-content-start">
                        { articles.map((element) => {
                            return <div key={element.url} className="col-4">
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 80) : ""}
                                    description={element.description ? element.description.slice(0, 140) : ""}
                                    imgUrl={element.urlToImage ? element.urlToImage : "https://s.yimg.com/uu/api/res/1.2/7bRYHMiKYEn9M7nv8_ZwoQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/6946e120-06ee-11ee-bb69-ade65ccf4c1c.cf.jpg"}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        })}
                    </div>
                    {loading && <Loading type="smallscreen" />}
                </div>
            </InfiniteScroll>
        </div>
        );

}

export default News

News.defaultProps = {
    pageSize: 9,
    country: 'in',
    category: 'general',
}
News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}