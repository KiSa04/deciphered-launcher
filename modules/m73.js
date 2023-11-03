import React from "react";
import n6_RC from "./m6";
import n16 from "./m16";

function SoftKeyButton(props) {
	var t = props.content ? { "data-icon": props.content.icon, "data-l10n-id": props.content.text } : null;
	return React.createElement("button", Object.assign({ id: "software-keys-" + props.pos, className: "sk-button", "data-position": props.pos }, t), props.content.text);
}

class SoftKeyPanel_RC extends n6_RC {
	constructor(props) {
		super(props);

		this.state = { left: props.left || "", center: props.center || "", right: props.right || "" };
		this.setRef = this.setRef.bind(this);
		this.softkeys = ["left", "right", "center"];
	}

	componentDidMount() {
		var e = this;
		n16.on("change", function () {
			var t = n16.currentKeys;
			e.softkeys.forEach(function (n) {
				t[n] = e.uniformContent(t[n] || "");
			}),
				e.setState(t);
		});
	}

	componentWillUpdate(e, t) {
		Array.from(this.element.getElementsByTagName("button")).forEach(function (e) {
			t[e.dataset.position].text || (e.textContent = "");
		});
	}

	uniformContent(e) {
		return "string" == typeof e && (e = e.startsWith("icon=") ? { icon: e.replace("icon=", "") } : { text: e }), e;
	}

	setRef(e) {
		this.element = e;
	}

	render() {
		return React.createElement(
			"form",
			{ className: "skbar none-paddings visible focused", id: "softkeyPanel", "data-type": "action", ref: this.setRef },
			React.createElement(SoftKeyButton, { pos: "left", content: this.state.left }),
			React.createElement(SoftKeyButton, { pos: "center", content: this.state.center }),
			React.createElement(SoftKeyButton, { pos: "right", content: this.state.right })
		);
	}
}

export default SoftKeyPanel_RC;
