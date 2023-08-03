import React from 'react'
import {NavLink,Routes,Route, Navigate, useRoutes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import routes from './routes'

/**
 * 
 * @returns 
 */

export default function App() {
    function computedClassName({isActive}){
		return isActive ? 'list-group-item atguigu' : 'list-group-item'
    }
    const element = useRoutes(routes)
	return (
		<div>
			<div className="row">
				<div className="col-xs-offset-2 col-xs-8">
					<div className="page-header"><h2>React Router Demo</h2></div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-2 col-xs-offset-2">
					<div className="list-group">
						{/* 路由链接 */}
                        {/* 高亮 */}
                        <NavLink className={computedClassName} to={'/about'}>about-class</NavLink>
                        <NavLink className={computedClassName} to={'/home'}>home-class</NavLink>

                        <NavLink className={"list-group-item"} to={'/about'}>about</NavLink>
                        <NavLink className={"list-group-item"} to={'/home'}>home</NavLink>

						{/* <NavLink className="list-group-item" to="/about">About</NavLink>
						<NavLink className="list-group-item" to="/home">Home</NavLink> */}
					</div>
				</div>
				<div className="col-xs-6">
					<div className="panel">
						<div className="panel-body">
							{/* 注册路由 */}
							

                            {/* 注册路由表 */}
                            {element}
                            
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
