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
		Prism.highlightAll();
		window.scrollTo({
			top: 50,
		});
	}

	scrollBody(cursor) {
		var rect = cursor.getBoundingClientRect(),
			scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
		window.scrollTo({
			top: rect.top + scrollTop - 150,
			behavior: "smooth",
		});
	}

	render() {
		return (
			<div>
				<Typewriter
					onInit={(typewriter) => {
						let msg = rdx.props.messages;
						msg.forEach(function (m, i) {
							typewriter
								.typeString(m)
								.pauseFor(450)
								.start()
								.callFunction(() => {
									let cursor = document.querySelectorAll(
										".Typewriter__cursor"
									);
									rdx.scrollBody(cursor[0]);

									if (i === msg.length - 1) {
										rdx.setState({ next: true });
										Prism.highlightAll();
										typewriter.stop();
									}
								});
						});
					}}
					options={{
						delay: 8,
						// delay: 1,
						cursor: "_",
					}}
				/>
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
			</div>
		);
	}
}