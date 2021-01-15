import React from "react";
import TheTypewriter from "./TheTypewriter";

var rdx = null;

export default class Step3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				`I'm a big fan of <span class="red">React Native</span> as well.<br>`,
				'When I was on contract with Reuters, I was given the opportunity to create a React Native App during its early days.<br>',
				'A good amount of time was spent working through issues compiling to Java/C++,<br>',
				'Apple store certification steps, <br>',
				'and several hundred undocumented bugs, while working with this bleeding edge tech.<br>',
				'<br>',
				'The biggest challenge was creating a custom search engine to marry a Journalist-created WP db of 60,000+ articles,',
				' a custom-built (by me) ElasticSearch engine, and the newly released RN build.<br>',
				'<br>',
				'You can view the app <a href="https://www.breakingviews.com/app/">here</a><br>',
				'The search engine is incredibly fast, you can see it in action <a href="https://www.breakingviews.com/search/?s=canada&tag=&sort=recency&pageIndex=0&terms=all&region=&isCustom=false&date=&id=&wlname=">here</a>'	
			],
		};
		rdx = this;
	}

	render() {
		return (
			<div>
				<TheTypewriter
					messages={this.state.messages}
					onEnd={()=>rdx.props.onEnd(3)}
					isLink={this.props.isLink}
				></TheTypewriter>
			</div>
		);
	}
}