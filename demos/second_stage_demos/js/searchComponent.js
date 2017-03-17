/**
 * Created by Magicwager on 2017/3/16.
 */
var SearchComp=React.createClass({
    getInitialState:function(){
        return {
            searchValue:"",
            formData:{}
        }
    },
    handleChange:function(e){
        this.setState({
            searchValue: e.target.value,
        })
    },
    handleClick:function(e){

    },
    render:function(){
        return (
            <div>
                <input type="text" className="u-form-control" id="exampleInput3"  placeholder="请输入搜索内容" style={{width:'18%'}} value={searchValue} onChange={this.handleChange}/>
                <button class="u-button u-button-success" onClick="">搜索</button>
            </div>
        )
    }



















})