/* global Module */

/* Magic Mirror
 * Module: MMM-randomGIFs
 *
 * By HeyHeyHexi
 * MIT Licensed.
 */

Module.register("MMM-randomGIFs",{
	defaults: {
		url: 'http://replygif.net/random',
		imageSize: 400,
		updateInterval: 60,
	},


	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.style.height = 0.98 * this.config.imageSize - 1 + "px";
		wrapper.style.overflow = "hidden";
		wrapper.innerHTML = '<iframe src="http://replygif.net/random" style="width:600px;height:600px;"></iframe>';
		return wrapper;
	},	
});
