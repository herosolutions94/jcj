import React from "react";

function Text(props) {
	let { string, length, parse } = props;
	string = string ?? "default";
	length = length ?? false;
	parse = parse ?? false;

	if (length) if (string.length > length) string = string.slice(0, length) + "...";

	if (parse) string = helpers.doParseHTML(string);

	return <div>{string}</div>;
}

export default Text;
