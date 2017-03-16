module.exports = {
   /* publishConfig: {
        command: "mvn",
        repositoryId: "",
        repositoryURL: "",
        artifactId: "",
        groupId: "",
        version: ""
    },*/
    serverConfig: {
        serverport: 8888,
        context: '/react-demos', //当前应用对应的上下文
        isProxyFirst: true, // isProxyFirst : 是否后端代理优先     //true -> 优先使用代理服务器数据，false -> 使用本地模拟数据
        proxyList: [
            {
                host: 'http://127.0.0.1:8080',
                context: '/react-demos'
            }
        ], //代理服务器列表
        proxyIgnore: [

        ], //代理忽略的URL列表
        mockList: [
            {
                type: "get",
                url: "",
                json: "../nc/nc.json"
            }
        ] //模拟请求列表
    }
};
