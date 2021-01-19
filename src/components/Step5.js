import React from "react";
import TheTypewriter from "./TheTypewriter";

import {snippet1, snippet2 } from '../snippets/Step5';

var rdx = null;


export default class Step5 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				'I have spent the last few years serving as <span class="blue">lead engineer</span> for a few small companies.<br>',
				'<br>',
				'Titles given to me were <span class="red">CTO</span> or <span class="rainbow">Director of Engineering</span> at those agencies.<br>',
				'<br>',
				'I am currently working to focus solely on development, <strong>but to speak to those experiences</strong>:', 
				'<br>',
				'<br>I have put several hundred hours into creating Git Flow and deployment process with stakeholders along with the developers I managed, as well as locking down security on ubuntu servers while enforcing best-practices.',
				'<br>',
				'<br>',				
				'Below you can see an ubuntu/Apache setup guide I\'ve been putting together over the last few years.<br>',
				'<br>',
				'I recently went through several ubuntu hardening guides, including the guide from the <a href="https://www.ncsc.gov.uk/collection/end-user-device-security/platform-specific-guidance/ubuntu-18-04-lts">National Cyber Security Centre</a> and <a href="http://bookofzeus.com/harden-ubuntu/">The Book of Zeus</a>',
				'<br>',
				'<br>',				
				'This guide is for Ubuntu 18.04 with Apache, which has several security improvements and security measures that I have enacted from the mentioned sources and a few others.<br>'
			],
		};
		rdx = this;
	}

	render() {
		return (
			<div>
				<TheTypewriter
					messages={rdx.state.messages}
					onEnd={()=>rdx.props.onEnd(5)}
					codeSnippet={snippet1} 
					codeSnippet2={snippet2} 
					isLink={rdx.props.isLink}
				></TheTypewriter>
			</div>
		);
	}
}