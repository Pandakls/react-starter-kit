// Externals
import React from 'react';

class Layout extends React.Component {

	constructor() {
		super();
		this.state = {
			className: 'React starter pack '
		};
	}

	render(){
		const {className} = this.state;
		return (
			<div className='content'>
				<h1>{className}</h1>
			</div>
			);
		}
	}

Layout.displayName=('layout');
export default Layout;
