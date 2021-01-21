import React from "react";
import TheTypewriter from "./TheTypewriter";

var rdx = null;

export default class Step3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				`I'm also a big fan of <span class="red">React Native</span>.<br>`,
				`When I was on-contract with Reuters, I was given the opportunity to create a React Native App while it was in its early days. While working with this bleeding-edge tech, I spent a good amount of time working through issues compiling to Java/C++, Apple store certification steps, and hundreds of undocumented bugs.<br><br>`,
				`My biggest challenge was creating a custom search engine, capable of marrying a Journalist-created WP db of 60,000+ articles, a custom-built (by me) ElasticSearch engine, and the newly released RN build.<br><br>`,
				`You can view the app <a target="_blank" href="https://www.breakingviews.com/app/">here</a>.<br>`,
				`The search engine is incredibly fast, you can see it in action <a target="_blank" href="https://www.breakingviews.com/search/?s=canada&tag=&sort=recency&pageIndex=0&terms=all&region=&isCustom=false&date=&id=&wlname=">here</a>.`,
			],
		};
		rdx = this;
	}

	render() {
		return (
			<div>
				<TheTypewriter
					messages={rdx.state.messages}
					onEnd={() => rdx.props.onEnd(3)}
					isLink={rdx.props.isLink}
				></TheTypewriter>
			</div>
		);
	}
}