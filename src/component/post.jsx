import React,{Component} from 'react';
import {connect} from 'react-redux';
import {postAction} from '../action/index';

class Posts extends Component{
    componentDidMount(){
     let data=   this.props.postAction();
     console.log(data);
    }

    render(){
        return(
            <h1>Posts</h1>
        )
    }
}



export default connect(null,{postAction})( Posts);