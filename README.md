# react-demos

### 说明
  

  对于只有听过react而并没有实际写过react的猿友们可以从第一阶段的示例开始。


  * 第一阶段讲了一些最基础的用法示例，可以初步对react有个认识。


  * 第二阶段结合了gulp，写了一个组件套用的示例。如果只关注react，可以忽视gulp的配置，这里gulp-browserify对react做了处理。


  * 第三阶段是Flux架构方式写的一个例子，Flux是针对现有前端MVC 框架的局限总结出来的一套基于 dispatcher 的前端应用架构模式。如果按照MVC的命名方式，可以将这种架构模式命名ADSV（Actions Dispatchers Store View）

  * es6_demos为为用gulp+es6+react的基本示例

#### 使用方法
- npm install 安装依赖的模块
  - 第一阶段的demo直接打开页面即可看到效果


  - 第二阶段为组件的套用的简单例子，需要启用gulp


    输入gulp，启动工程，端口为config下配的端口，默认是8888代理端口。通过访问localhost:8888/react-demos/second_stage_demos/index.html进入示例界面


  - es6_demos为用gulp+es6+react的基本示例
	  输入gulp，启动工程	端口为config下配的端口，默认是8888代理端口。通过访问
		localhost:8888/react-demos/es6_demos/index.html进入示例界面
