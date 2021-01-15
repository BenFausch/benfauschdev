import React from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

const IndigoSwitch = withStyles({
	switchBase: {
		color: indigo[100],
		"&$checked": {
			color: indigo[500],
		},
		"&$checked + $track": {
			backgroundColor: indigo[900],
		},
	},
	checked: {},
	track: {},
})(Switch);

var rdx = null;

export default class Top extends React.Component {
	constructor(props) {
		super(props);
		rdx = this;
	}

	toggleTheme() {
		rdx.props.onClick();
	}

	render() {
		return (
			<div className="topNav">
				<IndigoSwitch
					color="secondary"
					checked={rdx.props.checked}
					onClick={rdx.toggleTheme}
				/>
				<span>{`${rdx.props.theme} mode`}</span>
			</div>
		);
	}
}