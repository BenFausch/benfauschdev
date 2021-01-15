import React from "react";
import TheTypewriter from "./TheTypewriter";

var rdx = null;

export default class Step7 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				'You can contact me via email <a href="mailto:benjamin.fausch@gmail.com">here</a>.',
				"<br/>",
				'<span class="rainbow">Here\'s a little about me as a human:</span><br>',
			],
			listView: `<p>I was born in Fort Collins, CO. I spent most of my childhood spanning the gap between mathlete and music nerd.
<br> I coded my first program on a TI-81 (yes, 81) calculator in my jr. high pre-calculus class with my friends, and kept my love for tech while I began to focus on music in high school.
<br>
I moved to Boulder in 2004 to go to CU Boulder for Music and Technology.
<br>
I worked in the music industry for roughly 10 years as a recording engineer.
<br>
Starting as an intern for Far and Away Studios in Boulder, I eventually moved to NYC to work for the world famous Avatar Studios and gain my masters in Interactive Design from the New School.
<br>
With my experience creating designs and websites for various labels in the city, I gradually moved more and more into web development, and with help from a few teachers dove head-first into Javascript and PHP while taking my first web design/development jobs.
<br>
<br>
I soon missed Colorado, so my wife and I moved back home in 2014, and I began solely working as a developer.
<br>
I was promoted from a jr. to a full developer while working at SoundsTrue Publishing. I then moved to Digital Bureau where I worked closely under a team of incredibly knowlegable and talented developers for 3 years.
<br>
After Digital Bureau, I spent the last few years taking contracts with small companies to help them build process and a tech stack, while firming up their current security.
<br>
<br>
I'm currently looking to move up as a developer, it was an honor to be the "tech champion" for these companies, but my focus has always been to learn and grow my skillset, and I am now working towards that goal!
<br>
<br>
I also am an active musician in the Denver arts scene. I run my own Jazz/soul group, play in Balkan and New Orleans Brass bands, and have played at just about every event and festival in this great state. You can see a fun collection of me on stage with my tuba <a href="https://imageshack.com/user/benjamin.fausch">here</a>.</p>`,
		};
		rdx = this;
	}

	render() {
		return (
			<div>
				<TheTypewriter
					messages={rdx.state.messages}
					onEnd={() => rdx.props.onEnd(-1)}
					listView={rdx.state.listView}
					isLink={this.props.isLink}
				></TheTypewriter>
			</div>
		);
	}
}