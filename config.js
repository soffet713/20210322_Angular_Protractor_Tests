exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['japan_packing_list.js', 'math_functions.js'],
	jasmineNodeOpts: {
      defaultTimeoutInterval: 10000000
    }
}
