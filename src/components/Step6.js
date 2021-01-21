import React from "react";
import TheTypewriter from "./TheTypewriter";

var rdx = null;

export default class Step6 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				`I also like to code for fun.`,
				`<br>`,
				`Projects I have built in the past include:`,
				`<br>`,
				`<br>`,
			],
			listView: `<div class="bullet big">A WASM/Go powered page that converts your webcam into an ASCII-art feed dumped into raw HTML. The user has the option to download a GIF of the feed.</div>
			<br>
			<div class="bullet big">Various ML twitter robots, powered by Python or PHP. My dev robot <a target="_blank" style="display:contents" href="https://twitter.com/benfauschdev">@benfauschdev</a> ran for years sharing various dev links. I also analyzed 5000 Trump tweets and made a little robot based on them.... it did not go well LOL</div>
			<br>
			<div class="bullet big">A React Native reminder app that posts on your social media if you forget something.</div>
			<br>
			<div class="bullet big">A Chrome extension to pull Rotten Tomatoes ratings and IMDB scores for the movie you're checking out on Netflix.</div>
			<br>				
			<div class="bullet big">A Laravel app to help users track their Migraines and potential triggering environmental variables(Pressure changes, UV, humidity, etc). </div>
			<br>							
			<div class="bullet big">A massive home server connecting to about 30 services, many custom-built.</div>
			<br>`,
		};
		rdx = this;
	}

	render() {
		return (
			<div>
				<TheTypewriter
					messages={rdx.state.messages}
					onEnd={() => rdx.props.onEnd(6)}
					listView={rdx.state.listView}
					isLink={rdx.props.isLink}
				></TheTypewriter>
			</div>
		);
	}
}