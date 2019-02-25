module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/essential", "@vue/prettier"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-trailing-spaces": "warn",
		"function-paren-newline": [
			"error",
			"consistent"
		],
		"semi": [
			"warn",
			"always"
		]
	},
	parserOptions: {
		parser: "babel-eslint"
	}
};
