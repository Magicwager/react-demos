# react-demos

----------
- **说明**
  

  对于只有听过react而并没有实际写过react的猿友们可以从第一阶段的示例开始。


  第一阶段讲了一些最基础的用法示例，可以初步对react有个认识。


  第二阶段结合了gulp，写了一个组件套用的示例。如果只关注react，可以忽视gulp的配置，这里gulp-browserify对react做了处理。


  第三阶段是用es6写了一个简单的react示例，结合了gulp+es6+react搭建了个简单项目。

- **使用方法**
- npm install 安装依赖的模块
  - 第一阶段的demo直接打开页面即可看到效果


  - 第二阶段为组件的套用的简单例子，需要启用gulp


    输入gulp，启动工程，端口为config下配的端口，默认是8888代理端口。通过访问localhost:8888/react-demos/second_stage_demos/index.html进入示例界面


  - es6_demos为用gulp+es6+react的基本示例
	  输入gulp，启动工程	端口为config下配的端口，默认是8888代理端口。通过访问
		localhost:8888/react-demos/es6_demos/index.html进入示例界面

- **React 相关方法（API）介绍－ReactDom、ReactDOMServer、子节点**

  React组件及子组件最终通过由ReactDOM类库提供的render方法渲染到DOM中，ReactDOMServer类库使你可以在服务端完成组件的渲染。通过this.props.children属性可以访问组件的子节点，而对子节点的处理的方法则由React.Children类提供。

	- ReactDOM类库
	     1.渲染ReactElement：ReactDOM.render
		 2.移除组件：ReactDOM.unmountComponentAtNode
		 3.查找节点：findDOMNode()
	- ReactDOMServer类库
		 1. 渲染为HTML：renderToString()
		 2. 渲染为静态HTML：renderToStaticMarkup()
	- React.Children类
		 1. React.Children.map
		 2. React.Children.forEach
		 3. React.Children.count
		 4. React.Children.only
		 5. React.Children.toArray

<h3>1. ReactDOM类库</h3>

react-dom包提供了DOM操作的具体方法，如：组件渲染、节点找查等。你可以在程序的最顶层使用它，除了必要的DOM操作，大多数组件不需要使用这个模块。

<h4>1.1 渲染ReactElement：ReactDOM.render</h4>
    
    ReactComponent render(
      ReactElement element,
      DOMElement container,
      [function callback]
    )
渲染一个ReactElement到DOM中

- element，要渲染的的ReactElement
- container，渲染结果在DOM中插入的位置
- callback，回调函数，可选。传入该值时，会在组件渲染完或更新完成后调用返回值。
 
  React组件如，渲染一个组件到DOM中（render.html）：

		    var App = React.createClass({
		      render: function () {
		    return (
		    	<div className="divider">
		    	  <h2>{this.props.children}</h2><hr/>
		    	</div>
		      )}
		    });
		    
		    ReactDOM.render(
		      <App>itbilu.com</App>,
		      document.getElementById('example'),
		      function(){
		    	console.log('rendered done');  
		      }
		    );
		    // rendered done

<h3>2. ReactDOMServer类库</h3>

react-dom/server包提供了组件的服端渲染功能。

<h4>2.1 渲染为HTML：renderToString()</h4>
    string renderToString(ReactElement element)
- element，React元素
- 返回值：HTML

渲染ReactElement为原始HTML，这个方法只应该用在服务器端（虽然客户端也可以用）。你可以使用这个方法在服务端生成HTML字符串，并在页面请求时返回以使页面快速加载，并且生成的页面可以被搜索引擎SEO跟踪。

如果在服务器端已经渲染完成页面后，再调用ReactDOM.render()方法，React会保留它且只做事件处理，以便有非常良好的首次加载体验。

示例：React不推荐在客户端使用renderToString方法，为了操作方便，我们在下例中使用这个方法在客户端渲染一个ReactElement为HTML（renderToString.html）：
    
    var html = ReactDOMServer.renderToString(
      <div className="divider">
    <h2>itbilu.com</h2>
      </div>);
    
    document.getElementById('example').innerHTML = html;

<h4>2.2 渲染为静态HTML：renderToStaticMarkup()</h4>
    string renderToStaticMarkup(ReactElement element)
- element，React元素
- 返回值：HTML

该方法与renderToString方法类似，但这个方法不会生成额外的DOM特性，如：data-react-id等 React内部所使用的特性。当你想使用一个简单的静态页面生成器时这个方法非常有用，它会剥离额外的特性且会节省大量字节。

<h3>3. React.Children类</h3>

React.Children是一个工具类，它提供了对组件不透明数据结构this.props.children的处理功能。

<h4>3.1 React.Children.map</h4>
    
    array React.Children.map(object children, function fn [, object thisArg])

在每个直接子元素（children）上调用fn函数。如果 children 是一个内嵌的对象或者数组，它将被遍历（不会传入容器对象到fn中）。如果children 参数是 null 或者 undefined，那么返回 null 或者 undefined 而不是一个空对象。



#### 3.2 React.Children.forEach ####

    React.Children.forEach(object children, function fn [, object thisArg])
与React.Children.map方法功能类似，但不返回数组。



#### 3.3 React.Children.count ####

    number React.Children.count(object children)
统计children中的子组件数，和传递给map、forEach回调函数的调用次数一致。



#### 3.4 React.Children.only ####

    number React.Children.only(object children)
返回children中仅有的子级。否则抛出异常。



#### 3.5 React.Children.toArray ####

    array React.Children.toArray(object children)
将不透明的子组件children转换为一个水平的数组。这在你操作子组件集合使用render方法时非常有用，特别是在你想在传递结果前重新排列或分隔this.props.children时。