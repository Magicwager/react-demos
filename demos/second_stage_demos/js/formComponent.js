/**
 * Created by Magicwager on 2017/3/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var SearchComp=require('./searchComponent');
module.exports=React.createClass({
    getInitialState:function(){
        return{
            formData:[
                {
                    "id": "1fdsfdsfdsfer",
                    "code": "material",
                    "name": "档案",
                    "address": "用友软件园",
                    "phone": "1351563564",
                    "communicate": "wujian"
                }
            ],
            formFlag:false
        }
    },
    onChildChanged: function (newState) {
        this.setState({
            formFlag: newState
        });
    },
    render:function(){
        var visiblity=this.state.formFlag?'block':'none';
        console.log("search")
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
                                        <input type="text" className="u-form-control" value={this.state.formData[0].code} onChange={this.handleChange}/>
                                    </div>
                                    <div>
                                            <span>名称:</span>
                                            <input type="text" className="u-form-control" value={this.state.formData[0].name} />
                                    </div>
                                    <div>
                                                <span>地址:</span>
                                                <input type="text" className="u-form-control" value={this.state.formData[0].address} />
                                    </div>
                                    <div>
                                                    <span>联系人:</span>
                                                    <input type="text" className="u-form-control" value={this.state.formData[0].phone} />
                                    </div>
                                    <div>
                                                        <span>电话:</span>
                                                        <input type="text" className="u-form-control" value={this.state.formData[0].communicate} />
                                    </div>
                                    <div style={{textAlign:"right",paddingRight:97}}>
                                                            <button  className="u-button " style={{backgroundColor: "#cecece", border:" 1px #cecece solid",color:"white"}}>取消</button>
                                                            <button  className="u-button u-button-info">保存</button>
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