/* global Module */

/* Magic Mirror
 * Module: MMM-RandomPhoto
 *
 * By Diego Vieira <diego@protos.inf.br>
 * ICS Licensed.
 */

Module.register("MMM-RandomPhoto",{
	defaults: {
		opacity: 0.3,
		animationSpeed: 500,
		updateInterval: 60,
		url: 'https://unsplash.it/1920/1080/?random'
	},
