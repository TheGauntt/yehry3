module.exports = {
	extension: ["ts"],
	require: "ts-node/register",
	watch: true,
	// spec: ["test/utils/**/*.ts", "test/services/**/*.ts", "test/badges/**/*.ts", "test/controllers/**/asks.test.ts", "test/wordplay/**/*"],

	// Defaults + Mongoose gets upset if we try to recompile a model.
	"watch-ignore": ["node_modules", ".git", "src/models/**/*.ts"],
};

// Maybe there's a better way to do this?
process.env.NODE_ENV = "test";
