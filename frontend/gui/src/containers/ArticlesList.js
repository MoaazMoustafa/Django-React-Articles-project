import axios from "axios";
import React from "react";
import Article from "../components/articles";


class ArticleList extends React.Component{
    state = {
        articles:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({
                articles:res.data
            });
            console.log(res.data)
        })
    }
    render(){
        return (
            <Article data={this.state.articles}/>
        )
    }
}
export default ArticleList;