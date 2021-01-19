import React from "react";

var rdx = null;

export default class Stepper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggler:"",
			steps: [
				"Hola!",
				"Intro",
				"React",
				"React Native",
				"Other Stacks",
				"SysOps/Security",
				"Other Projects",
				"About/Contact",
			],
		};
		rdx = this;
	}

	goTo(id) {		
		rdx.props.goTo(id);
	}

	checkVisibility(i) {
		i = parseInt(i);
		let ids = "";
		ids += rdx.props.current === i ? "active " : "";
		ids = rdx.props.completed.includes(i) ? ids + " completed" : ids;
		return ids;
	}
	toggle(){
		let status = rdx.state.toggler === 'toggle' ? '' :'toggle';
		rdx.setState({'toggler':status}) 
	}

	render() {
		return (
			<div>
			<button className="toggler" onClick={rdx.toggle}>menu</button>
			<ul className={`stepper ${rdx.state.toggler}`}>
				{rdx.state.steps.map((text, index) => {
					return (
						<li key={index} className={rdx.checkVisibility(`${index}`)}>
							<span></span>
							<button onClick={() => rdx.goTo(`${index}`)}>
								{text}
							</button>
						</li>
					);
				})}
			</ul>
			</div>
		);
	}
}