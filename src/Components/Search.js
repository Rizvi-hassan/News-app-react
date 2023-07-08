import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps = {
        pageSize: 9,
        country: 'in',
        question: 'trending'
    }
    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
    }

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalPages: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=${this.props.question}&searchIn=title,description,content&sortBy=relevence&apiKey=d0a6aad050a4441c84c4308a0ac2c97c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        console.log(url)
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalPages: Math.ceil(parsedData.totalResults / 20),
            loading: false
        })
    }

    upadatePage = async (curpage) => {
        let url = `https://newsapi.org/v2/everything?q=${this.props.question}&searchIn=title,description,content&sortBy=popularity&apiKey=d0a6aad050a4441c84c4308a0ac2c97c&page=${curpage}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            page: curpage,
            loading: false
        })
    }

    capitalise = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    fetchMoreData = async () => {
        this.upadatePage(this.state.page + 1)
    }
    render() {
        return (<div>
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.page < this.state.totalPages}
                endMessage={!this.state.loading && <p className="text-body-primary" style={{ display: 'block', width: "100px", margin: '10px auto', fontWeight: 'bold', textDecoration: 'underline' }}>End of page</p>}
            >

                <div className='container'>
                    <h2 className="text-center text-light" style={{ marginTop: '80px' }} >Search Result- {this.props.question } </h2>
                    <div className="row justify-content-start">
                        {this.state.articles && this.state.articles.map((element) => {
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
                    {this.state.loading && <Loading type="smallscreen" />}
                </div>
            </InfiniteScroll>
        </div>
        );
    }
}

export default News;
