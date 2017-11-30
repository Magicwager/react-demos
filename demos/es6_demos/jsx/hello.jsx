/**
 * Created by magicwager on 2017/11/16.
 */
import React,{Component} from 'react';
import ReactDom from 'react-dom';
export default class Hello extends Component{
    constructor(props){
     super()
     console.log("==constructor hello==");
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    render(){
        return (
           "Hello World!"
        )
       
    }
    
}
