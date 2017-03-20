/**
 * Created by Magicwager on 2017/3/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
module.exports=React.createClass({
    getInitialState:function(){
        return {
            searchValue:"",
            formFlag: this.props.initialformFlag

        }
    },
    handleChange:function(e){
        this.setState({
            searchValue: e.target.value
        })
    },
    handleClick:function(e){
        if (this.state.searchValue){
            this.setState({
                formFlag:true
            })
            this.props.callbackParent(true);
        }else{
            this.setState({
                formFlag:false
            })
            this.props.callbackParent(false);
        }
    },
    render:function(){
        var searchValue=this.state.searchValue;
        console.log("search")
        return (
            <div >
                <input type="text" className="u-form-control" id="exampleInput3"  placeholder="请输入搜索内容" style={{width:'18%'}} value={searchValue} onChange={this.handleChange}/>
                <button className="u-button u-button-success" onClick={this.handleClick}>搜索</button>
            </div>
        )
    }
})