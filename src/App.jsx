import React, { Component,Fragment } from 'react'
// import Demo from './components/03_hooks'
// import Demo from './components/04_fragment'
import A from './components/05_context'
// import Parent from './components/06_optimize'
// import Parent from './components/7_renderProps'
import Parent from './components/8_ErrorBoundary/Parent'

export default class App extends Component {
	render() {
		return (
			<Fragment>
				{/* <Demo/> */}
				{/* <A></A> */}
				<Parent></Parent>
			</Fragment>
		)
	}
}
