import React from 'react';


var rdx = null;
export default class Stepper extends React.Component {

	constructor(props) {
		super(props);
		rdx = this;
	}

	goTo(id){
		console.log("GOTO",id)
		rdx.props.goTo(id)
	}

	checkVisibility(i){
		let ids = '';
		ids += rdx.props.current === i ? 'active ':'';
		ids = rdx.props.completed.includes(i) ? ids+' completed':ids;
		return ids;
	}

	render() {
		return (
			<ul className="stepper">
			<li className={rdx.checkVisibility(0)}><span></span><button onClick={()=>rdx.goTo(0)}>Hola!</button></li>
			<li className={rdx.checkVisibility(1)}><span></span><button onClick={()=>rdx.goTo(1)}>Intro</button></li>
			<li className={rdx.checkVisibility(2)}><span></span><button onClick={()=>rdx.goTo(2)}>React</button></li>
			<li className={rdx.checkVisibility(3)}><span></span><button onClick={()=>rdx.goTo(3)}>React Native</button></li>
			<li className={rdx.checkVisibility(4)}><span></span><button onClick={()=>rdx.goTo(4)}>Other Stacks</button></li>
			<li className={rdx.checkVisibility(5)}><span></span><button onClick={()=>rdx.goTo(5)}>SysOps/Security</button></li>
			<li className={rdx.checkVisibility(6)}><span></span><button onClick={()=>rdx.goTo(6)}>Other projects</button></li>			
			<li className={rdx.checkVisibility(7)}><span></span><button onClick={()=>rdx.goTo(7)}>About/Contact</button></li>
			</ul>
		);
	}
}
