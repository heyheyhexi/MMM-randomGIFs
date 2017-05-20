/* global Module */

/* Magic Mirror
 * Module: MMM-RandomPhoto
 *
 * By Diego Vieira <diego@protos.inf.br>
 * ICS Licensed.
 */

Module.register("MMM-randomGIFs",{
	defaults: {
		url: 'http://replygif.net/random',
		imageSize: 400,
	},
	
//	start: function () {
//		var source = document.location.href = this.config.url;
//		
//	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.style.height = 0.98 * this.config.imageSize - 1 + "px";
		wrapper.style.overflow = "hidden";
		wrapper.innerHTML = '<iframe src="http://replygif.net/random" style="width:600px;height:600px;"></iframe>';
		return wrapper;
	},	
});
