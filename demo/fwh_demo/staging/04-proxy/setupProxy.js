// const proxy = require('http-proxy-middleware')

// module.exports = function(app){
// 	app.use(
// 		proxy('/api1',{ //遇见/api1前缀的请求，就会触发该代理配置
// 			target:'http://localhost:5000', //请求转发给谁
// 			changeOrigin:true,//控制服务器收到的请求头中Host的值
// 			pathRewrite:{'^/api1':''} //重写请求路径(必须)
// 		}),
// 		proxy('/api2',{
// 			target:'http://localhost:5001',
// 			changeOrigin:true,
// 			pathRewrite:{'^/api2':''}
// 		}),
// 	)
// }

/**
 * 注意：http-proxy-middleware 2.0版本以上的写法不一样
 * https://cloud.tencent.com/developer/article/1664425
 * 
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api1', {
        // target : 'https://easymock.spiritling.pub',
		target:'http://localhost:5000', //请求转发给谁
        changeOrigin : true,
        ws: true,
        pathRewrite : {
            '^/api1' : ''
        },
    }),
	createProxyMiddleware('/api2', {
        // target : 'https://easymock.spiritling.pub',
		target:'http://localhost:5001', //请求转发给谁
        changeOrigin : true,
        ws: true,
        pathRewrite : {
            '^/api2' : ''
        },
    })
	);
};