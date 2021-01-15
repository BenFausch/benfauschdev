import React from "react";
import TheTypewriter from "./TheTypewriter";

export default class Step1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				"Let's get down to business.<br>",
				"You probably want to know about me as a developer,<br>",
				'Or what kind of projects I like to work on.<br><br>',
				'You may also want to know a bit about what other things I like to do.<br>',
				'Well let\'s get going!<br>',
			],
		};
	}

	render() {
		return (
			<TheTypewriter
				messages={this.state.messages}
				onEnd={()=>this.props.onEnd(1)}
			></TheTypewriter>
		);
	}
}