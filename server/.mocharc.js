module.exports = {
	extension: ["ts"],
	require: "ts-node/register",
	bail: true,
	exit: true,
	spec: ["test/**/*.ts"],
};

// Maybe there's a better way to do this?
process.env.NODE_ENV = "test";
