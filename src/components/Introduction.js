import React from "react";
import TheTypewriter from "./TheTypewriter";

export default class Introduction extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			messages:[
				'Hola Muchacho!<br>',
				'My Name is Ben Fausch.<br>',
				'I\'m into all kinds of <br><span class="rainbow">technology</span>.<br><br>',
				'I have worked professionally as a web developer for almost <span class="underline">9 years</span>,<br>',
				'and continuously try on new tools and languages to create <span class="red">fast</span> and <span class="blue">friendly</span><br>',
				'performative web experiences.'
			]
		}
	}

	render() {
		return (
			<TheTypewriter messages={this.state.messages} onEnd={()=>this.props.onEnd(0)}></TheTypewriter>
		);
	}
}