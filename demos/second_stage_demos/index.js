/**
 * Created by magicwager on 2017/3/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var FormComp=require('./js/formComponent');
var mainComp=ReactDOM.render(
    <FormComp />,
    document.getElementById('app')
)