import React from "react";
import Typewriter from "typewriter-effect";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import Prism from "prismjs";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

var rdx = null;

export default class TheTypewriter extends React.Component {
	constructor(props) {
		super(props);
		rdx = this;
		this.state = {
			next: false,
		};
	}

	componentDidMount() {
		console.log("ISLINK",rdx.props.isLink)
		Prism.highlightAll();
		window.scrollTo({
			top: 0,
		});
		if(rdx.props.isLink){ rdx.setNext()};
	}

	scrollBody(cursor) {
		var rect = cursor.getBoundingClientRect(),
			scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
		window.scrollTo({
			top: rect.top + scrollTop,
			behavior: "smooth",
		});

	}


	setNext(){
		rdx.setState({next:true})
	}


	render() {

	function getMessages(){
		console.log('getmessages')
		// rdx.setState({ next: true });
		let container = [];
		rdx.props.messages.forEach(function(m){
			container.push(<p key={Math.random()} dangerouslySetInnerHTML={{__html:m}}></p>)
		})
		return container;
	}

		return (
			<div>
				{rdx.props.isLink ? 
					getMessages()
				 : <Typewriter
					onInit={(typewriter) => {
						let msg = rdx.props.messages;
						try {
							msg.forEach(function (m, i) {
								typewriter
									.typeString(m)
									.pauseFor(450)									
									.callFunction(() => {
										if (i === msg.length - 1) {
											rdx.setState({ next: true });
											Prism.highlightAll();
											try{
											let cursor = document.querySelectorAll(
												".Typewriter__cursor"
											);
											rdx.scrollBody(cursor[0]);
											}catch(e){
												console.log(e)
											}
										}
									})
									.start();
							});
						} catch (e) {
							console.log("er", e);
						}
					}}
					options={{
						delay: 8,
						cursor: "_",
					}}
				/>}

				
				<Zoom
				 className="listView"
					in={rdx.state.next && rdx.props.listView}
					style={{
						transitionDelay: rdx.state.next ? "250ms" : "0ms",
						marginTop: 100,
					}}
				>
					<div
						dangerouslySetInnerHTML={{ __html: rdx.props.listView }}
					></div>
				</Zoom>

				{rdx.props.codeSnippet ? (
					<Zoom
						in={rdx.props.codeSnippet && rdx.state.next}
						style={{
							transitionDelay: rdx.state.next ? "250ms" : "0ms",
							marginTop: 100,
						}}
					>
						<pre>
							<code className="language-javascript">
								{`${rdx.props.codeSnippet}`}
							</code>
						</pre>
					</Zoom>
				) : (
					""
				)}
				{rdx.props.codeSnippet2 ? (
					<Zoom
						in={rdx.props.codeSnippet2 && rdx.state.next}
						style={{
							transitionDelay: rdx.state.next ? "500ms" : "0ms",
							marginTop: 100,
						}}
					>
						<pre>
							<code className="language-javascript">
								{`${rdx.props.codeSnippet2}`}
							</code>
						</pre>
					</Zoom>
				) : (
					""
				)}
				<Zoom
					in={rdx.state.next}
					style={{
						transitionDelay: rdx.state.next ? "250ms" : "0ms",
						marginTop: 100,
					}}
				>
					<Fab
						onClick={rdx.props.onEnd}
						color="primary"
						aria-label="add"
					>
						<ArrowForwardIcon />
					</Fab>
				</Zoom>
			</div>
		);
	}
}