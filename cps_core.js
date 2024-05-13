/**
 * Copyright @LAPCoder
 *
 * Licensed under the MIT License.
 */

content = document.getElementById("cps-container");

var clics = 0;

function animstart(tim)
{
	globalThis.time = tim;
	anim();
}

function anim()
{
	content.innerHTML = Math.floor((clics*1000 / (Date.now() - time))*10)/10;
	
	requestAnimationFrame( anim );
}