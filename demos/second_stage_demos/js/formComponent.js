/**
 * Created by Magicwager on 2017/3/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var SearchComp=require('./searchComponent');
module.exports=React.createClass({
    getInitialState:function(){
        return{
            formData:
                {
                    "id": "1fdsfdsfdsfer",
                    "code": "material",
                    "name": "档案",
                    "address": "用友软件园",
                    "phone": "1351563564",
                    "communicate": "wujian"
                },
            formDataKey:["id","code","name","address","phone","communicate"],
            formFlag:false
        }
    },
    /*子组件向父组件传递值*/
    onChildChanged: function (newState) {
        this.setState({
            formFlag: newState
        });
    },
    /*增加自定义属性通过data-添加，不然不认可
     * 获取自定义属性的方法，e.target.getAttribute(key)
     * */
    handleChange:function(e,key){
        var valueCallBack=function(obj){
            var key=e.target.getAttribute("data-key");
            obj[key]=e.target.value;
            return obj;

        }
        this.setState({formData:valueCallBack(this.state.formData)});
    },
    onCancel:function(){
        this.setState({
            formFlag: false
        });
    },
    onSave:function(){
        this.setState({
            formFlag: false
        });
        console.log(this.state.formData)
    },
    render:function(){
        var visiblity=this.state.formFlag?'block':'none';
        return (
        <div className="u-container-fluid u-widget-bg demo">
            <div className="u-row">
                <div className="u-col-12">
                    <div className="u-widget">
                        <h4></h4>
                        <div className="u-widget  u-widget-right">
                            <div className="u-widget-heading">
                                <h3 className="u-widget-title">测试</h3>
                            </div>
                            <div className="u-widget-body">
                                <SearchComp initialformFlag={this.state.formFlag} callbackParent={this.onChildChanged}/>
                                <div className="table-fixedheader-body "  style={{display:visiblity}}>

                                    <div>
                                        <span>编码:</span>
                                        <input type="text" className="u-form-control" placeholder="code" data-key={this.state.formDataKey[1]} value={this.state.formData.code} onChange={this.handleChange}/>
                                    </div>
                                    <div>
                                            <span>名称:</span>
                                            <input type="text" className="u-form-control" data-key={this.state.formDataKey[2]}  value={this.state.formData.name} onChange={this.handleChange}/>
                                    </div>
                                    <div>
                                                <span>地址:</span>
                                                <input type="text" className="u-form-control" data-key={this.state.formDataKey[3]}  value={this.state.formData.address} onChange={this.handleChange}/>
                                    </div>
                                    <div>
                                                    <span>联系人:</span>
                                                    <input type="text" className="u-form-control" data-key={this.state.formDataKey[4]}  value={this.state.formData.phone} onChange={this.handleChange}/>
                                    </div>
                                    <div>
                                                        <span>电话:</span>
                                                        <input type="text" className="u-form-control" data-key={this.state.formDataKey[5]}  value={this.state.formData.communicate} onChange={this.handleChange}/>
                                    </div>
                                    <div style={{textAlign:"right",paddingRight:97}}>
                                                            <button  className="u-button " onClick={this.onCancel} style={{backgroundColor: "#cecece", border:" 1px #cecece solid",color:"white"}}>取消</button>
                                                            <button  className="u-button u-button-info" onClick={this.onSave}>保存</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );

    }
})