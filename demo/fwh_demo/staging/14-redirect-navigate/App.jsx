import React, { Component } from 'react'
import {Route,Routes,Switch,Navigate} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'
import Test from './pages/Test'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<MyNavLink to="/about">About</MyNavLink>
							<br></br>
							<MyNavLink to="/home">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Routes>
									<Route path='/about' Component={About}></Route>
									{/* <Route path='/home' Component={Home}></Route> */}
									{/* 精确搜索条件 */}
									<Route exact path='/home' Component={Home}></Route>
									{/* 重定向-5版本移除了redirect采用Navigate */}
									{/* route5和6的区别：https://juejin.cn/post/7085266272476200967 */}
									{/* <Navigate to="/about"/> */}
									{/* 默认路径跳转到about */}
									{/* <Route path='*' element={<Navigate to="/about"></Navigate>}></Route> */}

									{/* 旧版本写法 */}
									 {/* <Route path="/about" component={About}/>
									 <Route path="/home" component={Home}/>
									 <Route path="/home" component={Test}/> */}
								</Routes>
									 

							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
