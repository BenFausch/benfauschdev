import React from "react";
import TheTypewriter from "./TheTypewriter";

var rdx = null;

export default class Step4 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				`I'm not afraid of <span class="red">new tech</span>, nor do I back down from making technology work best for me or the client.<br>`,
				"<br>",
				`The most recent example of this is last week when I hacked my $30 microwave so I could store a 6 minute kitchen timer for when I fry chicken.<br>`,
				`🐔<br>`,
				"<br>",
				`<span class="underline">Like many career devs, an <span class="rainbow"><strong>overwhelming</strong></span> amount of my work is behind client owned BitBucket accounts.</span><br>`,
				"<br>",
				`However,<br>`,
				`Here are a few more stacks I've built, scoped, or managed a team utilitizing in a professional capacity:<br>`,
				"<br>",
			],
			listView: `<div class="bullet">GraphQL, AWS REKOGNITION, Gatsby, React <span class="notation">as DOE for CauseLabs 2019-20 contracted with finVenture Capital</span></div>
						<br>
						<div class="bullet">Laravel, Twill, Vue <span class="notation">as DOE for CauseLabs 2019-20 for various client, including the Univeristy of Cincinnati Economics Center</span></div>
						<br>
						<div class="bullet">Fully custom WP development (plugin dev, custom theme dev, API integration), hosted on AWS EC2/RDS/S3 or WPEngine <span class="notation">as DOE for CauseLabs 2019-20 for the California Child Care Resource and Referral Network</span></div>
						<br>
						<div class="bullet">Google Firebase/AWS lightsail Node Apps/WP <span class="notation">as Sr. Developer for Rassman Design 2018-19</span></div>
						<br>
						<div class="bullet">React Native, ElasticSearch, EC2/RDS, WP <span class="notation">as Sr. Developer for Digital Bureau on contract with Reuters 2015-2018</span></div>
						<br>
						<div class="bullet">Custom built ElasticSearch engine on EC2 host <span class="notation">as Sr. Developer for Digital Bureau on contract with Reuters 2015-2018</span></div>
						<br>
						<div class="bullet">Firebase with Nest <span class="notation">as Sr. Developer for Digital Bureau 2017</span></div>
						<br>
						<div class="bullet">Magento, Wordpress, and old-school WAR JVM with Jenkins <span class="notation">as Developer for SoundsTrue 2014-2015</span></div>`,
		};
		rdx = this;
	}

	render() {
		return (
			<div>
				<TheTypewriter
					messages={rdx.state.messages}
					onEnd={() => rdx.props.onEnd(4)}
					listView={rdx.state.listView}
					isLink={this.props.isLink}
				></TheTypewriter>
			</div>
		);
	}
}