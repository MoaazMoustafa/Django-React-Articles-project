import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

// const CustomForm = () => {
//   const [form] = Form.useForm();
class CustomForm extends React.Component{
     handelFormSubmit = (e, requestType, articleID) =>{
        const  title = e.target.elements.title.value;
        const  content = e.target.elements.content.value;
        console.log('woooow')
        switch (requestType){
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/',{
                    title:title,
                    content:content
                }).then(res =>console.log(res)).catch(err => console.log(err))
            case 'patch':
                return axios.patch(`http://127.0.0.1:8000/api/${articleID}/`,{
                    title:title,
                    content:content
                }).then(res =>console.log(res)).catch(err => console.log(err))
        
        }
    }
render(){
    return (
        <form onSubmit={(event)=>this.handelFormSubmit(event,this.props.requestType,this.props.articleID)}>
          <Form.Item  label="Title">
            <Input name='title' placeholder="Put a title here" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name='content' placeholder="Enter some content ..." />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">{this.props.btn}</Button>
          </Form.Item>
        </form>
        
      );
}
  
};


export default CustomForm;