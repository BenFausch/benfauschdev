import React from "react";
import TheTypewriter from "./TheTypewriter";

var rdx = null;
export default class Step1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				`Let's get down to business.<br>`,
				`You probably want to know about who I am as a developer<br>
				or what kind of projects I like to work on.<br><br>`,
				`You may also want to know a bit about me when I'm not coding.<br>
				Well, let's get going!<br>`,
			],
			listView: `<div class="profiles"><img src="/img/profile.jpg" alt="Profile-8bit" />`,
		};
		rdx = this;
	}

	render() {
		return (
			<TheTypewriter
				messages={rdx.state.messages}
				onEnd={() => rdx.props.onEnd(1)}
				isLink={rdx.props.isLink}
				listView={rdx.state.listView}
			></TheTypewriter>
		);
	}
}