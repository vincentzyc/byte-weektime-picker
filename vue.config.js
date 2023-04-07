const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
	css: {
		extract: false
  },
  outputDir: "docs",
	productionSourceMap: false
})