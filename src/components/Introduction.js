import React from "react";
import TheTypewriter from "./TheTypewriter";

var rdx = null;
export default class Introduction extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				`Hi there!<br>`,
				`My name is Ben Fausch.<br>`,
				`I'm into all kinds of <br><span class="rainbow">technology</span>.<br><br>
				I have almost <span class="underline">a decade</span> of experience as a web developer<br>
				and I'm continuously trying out new tools and languages to create <span class="red">fast</span> and <span class="blue">friendly</span> performative web experiences.`,
			],
			listView: `<div class="profiles"><img src="/img/me.jpg" alt="Profile" />`,
		};
		rdx = this;
	}

	render() {
		return (
			<TheTypewriter
				messages={rdx.state.messages}
				onEnd={() => rdx.props.onEnd(0)}
				listView={rdx.state.listView}
			></TheTypewriter>
		);
	}
}