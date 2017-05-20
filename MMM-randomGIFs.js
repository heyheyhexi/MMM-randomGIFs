/* global Module */

/* Magic Mirror
 * Module: MMM-RandomPhoto
 *
 * By Diego Vieira <diego@protos.inf.br>
 * ICS Licensed.
 */

Module.register("MMM-randomGIFs",{
	defaults: {
		url: 'http://replygif.net/random'
	},
	
start: Functionn () {
	var source = document.location.href = this.config.url;
