import React from "react";
import TheTypewriter from "./TheTypewriter";

var rdx = null;
export default class Introduction extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				"Hola Muchacho!<br>",
				"My Name is Ben Fausch.<br>",
				'I\'m into all kinds of <br><span class="rainbow">technology</span>.<br><br>',
				'I have worked professionally as a web developer for almost <span class="underline">9 years</span>,<br>',
				'and continuously try on new tools and languages to create <span class="red">fast</span> and <span class="blue">friendly</span> performative web experiences.',
			],
			listView:`<div class="profiles"><img src="/img/me.jpg" alt="Profile" />`
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