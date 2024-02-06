var dialer_numbers = { w: "1", e: "2", r: "3", s: "4", d: "5", f: "6", z: "7", x: "8", c: "9", ",": "0", o: "+", a: "*", q: "#" };

var dialer_translator = {
	translate: function (e) {
		return dialer_numbers[e] || e;
	},
};

export default dialer_translator;
