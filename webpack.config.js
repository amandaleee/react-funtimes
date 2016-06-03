//will compile all our js and jsx down to javascript; also launches dev server

module.exports = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'index.js'
		//the above is our bundled file
	}, 
	devServer: {
		inline: true, 
		//allows it to reload on the fly
		port: 3333
		//make this port whatever you want
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel',
				query: {
					presets: ['es2015', 
						'react'
					]
				}
			}
		]
	}
}