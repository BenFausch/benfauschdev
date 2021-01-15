import React from "react";
import TheTypewriter from "./TheTypewriter";

var rdx = null;


export default class Step1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				'I also like to code for fun. For my own happiness and education I\'ve taken on several different pieces of tech',
				'<br>',
				'Projects I have built in the past include:',
				'<br>',				
				'<br>',				
				'<div class="bullet big">A WASM/Go powered page that converts your webcam into an ASCII-art feed dumped into raw HTML. The user has the option to download a GIF of the feed.</div>',
				'<br>',
				'<div class="bullet big">Various ML twitter robots, powered by Python or PHP. My dev robot at <a style="display:contents" href="https://twitter.com/benfauschdev">twitter/benfauschdev</a> ran for years sharing various dev links. I also analyzed 5000 trump tweets and made a little robot based on them....<br> It did not go well LOL</div>',
				'<br>',
				'<div class="bullet big">A React Native reminder app that posts on your social media if you forget something.</div>',
				'<br>',
				'<div class="bullet big">A chrome extension to pull Rotten Tomatoes, IMDB scores for the movie you\'re checking out on Netflix.</div>',
				'<br>',				
				'<div class="bullet big">A Laravel app to help users track their Migraines and the environmental variables involved that may be triggers. (Pressure changes, UV, humidity, etc)</div>',
				'<br>',							
				'<div class="bullet big">A massive home server that connects to about 30 services, many custom-built.</div>',
				'<br>',
			],
		};
		rdx = this;
	}

	render() {
		return (
			<div>
				<TheTypewriter
					messages={rdx.state.messages}
					onEnd={()=>rdx.props.onEnd(6)}										
				></TheTypewriter>
			</div>
		);
	}
}