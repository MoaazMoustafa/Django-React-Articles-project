import React from "react";
import axios from "axios";
import { Button, Card } from "antd";
import CustomForm from "../components/Form";
class ArticleDetail extends React.Component {
    state = {
        article:{}
    }
    componentDidMount(){
        const articleID = this.props.articleID;
        // let {Id} = useParams();
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
        .then(res => {
            this.setState({
                article:res.data
            })
        })
    }

    handelDelete = (e)=>{
        axios.delete(`http://127.0.0.1:8000/api/${this.props.articleID}/`)
    }
    render(){
        return(<>
            <Card title={this.state.article.title}>
                <p>
                    {this.state.article.content}
                </p>
            </Card>
            <br/>
            <br/>
            <br/>
            <CustomForm requestType="patch" 
            btn='Update'
            articleID={this.props.articleID}/>
            <form action="/" onSubmit={this.handelDelete}>
                <Button type="danger" htmlType="submit">Delete</Button>
            </form>
            </>
        )
    }
}
export default ArticleDetail;