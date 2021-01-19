import React from "react";
import TheTypewriter from "./TheTypewriter";

import {snippet1, snippet2} from '../snippets/Step2.js';
var rdx = null;

export default class Step2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				`I'm a huge fan of <span class="red">React.</span><br>`,
				'I originally learned React back in 2016 while working under <a href="https://www.linkedin.com/in/dmackinnon" target="_blank">Don Mackinnon</a>, one of the leaders in the Denver React community, and have been loving it ever since. ',
				`<br>Not to say I didn't love the old trustworthy imperative jQuery before :) `,
				`<br>Below is a solid example of my code in that respect.`,
				`<br> This is a refactor from Vanilla I did very recently for my <span class="rainbow">ASCII webcam tool</a>. <br>`,
				`<br><strong>Github for the React Project is <a href="" target="_blank">here</a> <br>`,
				`You can demo it (and download a cool ASCII gif version of your webcam!) <span class="rainbow"><a href="" target="_blank">here</a></span></strong>` 				
			],
		};
		rdx = this;
	}

	render() {
		return (
			<div>
				<TheTypewriter
					messages={rdx.state.messages}
					onEnd={()=>rdx.props.onEnd(2)}
					codeSnippet={snippet1} 					
					codeSnippet2={snippet2} 
					isLink={rdx.props.isLink}										
				></TheTypewriter>
			</div>
		);
	}
}