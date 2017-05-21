/* global Module */

/* Magic Mirror
 * Module: MMM-randomGIFs
 *
 * By HeyHeyHexi
 * MIT Licensed.
 */

Module.register("MMM-randomGIFs",{
	defaults: {
//		url: 'http://replygif.net/random'
		imageSize: 600,
	},
	
	start: function setup() {
		noCanvas();
		var api = "http://api.giphy.com/v1/gifs/random?"
		var apiKey = "api_key=dc6zaTOxFJmzC"
		var query = ""
		var url = api + apiKey + query;
		loadJSON(url, gotData);	
	},
	start: function gotData(giphy){
			this.creategif = createImg(giphy.data[0].image_url);
			}

	getDom: function() {
		var wrapper = document.createElement("div");
			wrapper.style.height = 0.98 * this.config.imageSize - 1 + "px";
			wrapper.style.overflow = "hidden";
		
		var image = document.createElement("img");
		image.src = createImg
//		wrapper.innerHTML = '<iframe src="http://replygif.net/random" style="width:600px;height:600px;"></iframe>';
		image.width = this.config.imageSize.toString();
		image.height = this.config.imageSize.toString();
		
		wrapper.appendChild(image);
		return wrapper;
	},	
});
