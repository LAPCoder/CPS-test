/**
 * Copyright @LAPCoder
 *
 * Licensed under the MIT License.
 */

var clics = 0;

function animstart(tim)
{
	globalThis.time = tim;
	anim();
}

function anim()
{
	$("#cps-container div").html(Math.floor((clics*1000 / (Date.now() - time))*10)/10);
	
	requestAnimationFrame( anim );
}