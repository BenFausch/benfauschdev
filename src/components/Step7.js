import React from "react";
import TheTypewriter from "./TheTypewriter";

var rdx = null;

export default class Step7 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
			`You can contact me via email <a target="_blank" href="mailto:benjamin.fausch@gmail.com">here</a>.`,
			`<br/>`,
			`<br/>`,
			`<span class="rainbow">Here's a little about me as a human:</span>`,
			],
			listView: `<p>I was born in <span class="red">Fort Collins, CO</span>. I spent most of my childhood spanning the gap between mathlete and music nerd. I coded my first program on a TI-81 (yes, 81!) calculator in my junior high pre-calculus class with my friends, and kept my love for tech while I began to focus on music in high school. I moved to <span class="red">Boulder</span> in 2004 to go to <span class="blue">CU Boulder</span> for Music and Technology.
			<br>
			<br>
			<img src="/img/bio.jpg" alt="bio pic" />
			For roughly 10 years, I worked in the music industry as a recording engineer. Starting as an intern for Far and Away Studios in Boulder, I later moved to NYC to work for world-famous Avatar Studios and earn my MA in Interactive Design from the New School. With my experience creating designs and websites for a few labels in the city, I moved into web development, and with help from a few fantastic teachers, dove head-first into Javascript and PHP.
			<br>
			<br>
			I ended up missing <span class="blue">Colorado</span>, so my wife and I moved back in <span class="red">2014</span>, and I began working as a developer full-time. I was promoted from junior developer to full-stack developer while working at SoundsTrue Publishing. I then moved to Digital Bureau, where I worked closely under a team of incredibly knowlegable and talented developers for over 3 years. After Digital Bureau, I have spent the last few years taking contracts with small companies, helping them build process and a tech stack, while firming up their security.
			<br>
			<br>
			<strong>I'm currently looking to learn and grow my skillset and move on up as a <span class="rainbow">developer</span>!</strong>
			<br>
			<br>
			I also am an active gigging musician in the <span class="blue">Denver</span> music scene. I lead my own jazz/soul group, play in Balkan and New Orleans brass bands, and have played at just about every venue and festival in this great state. You can see a fun collection of me on stage with my tuba <a target="_blank" href="https://imageshack.com/user/benjamin.fausch">here</a>.</p>`,
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
			isLink={rdx.props.isLink}
			></TheTypewriter>
			</div>
			);
	}
}