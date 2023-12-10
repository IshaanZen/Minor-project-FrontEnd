
const scroll = new LocomotiveScroll({
    el: document.querySelector('body'), 
    // el =
    smooth: true
});



function cursorfollow(){
	window.addEventListener("mousemove" , (e)=>{
		console.log(e.clientX , e.clientY)
		
		document.querySelector(".cursor-follow").style.transform= `translate(${e.clientX+10}px , ${e.clientY-10}px)`;

	})
}

function mainAnimation(){

	var tl = gsap.timeline();

	tl.from("#nav", {
		y:'-100' , 
		opacity:0,
		duration: 0.8,
		ease: Expo.easeinout
	})
	tl.from(".flip-card-left-1", {
		y:'-100' , 
		stagger: 0.1,
		opacity:0,
		duration: 0.5,
		ease: Expo.easeinout
	})
	tl.from(".flip-card", {
		// y:'-100' , 
		stagger: 0.1,
		opacity:0,
		duration: 0.5,
		ease: Expo.easeinout
	})
	tl.from(".flip-card-left-2", {
		x:'-100' , 
		stagger: 0.1,
		opacity:0,
		duration: 0.5,
		ease: Expo.easeinout
	})
	tl.from(".flip-card-left-3", {
		y:'100' , 
		stagger: 0.1,
		opacity:0,
		duration: 0.5,
		ease: Expo.easeinout
	})
	tl.from(".left-Heading", {
		// y:'100' , 
		stagger: 0.1,
		opacity:0,
		duration: 0.5,
		ease: Expo.easeinout
	})
	tl.from(".guideline", {
		// y:'100' , 
		stagger: 0.1,
		opacity:0,
		duration: 0.5,
		ease: Expo.easeinout
	})

	tl.from(".start-analysis>a", {
		stagger:0.1,
		opacity:0,
		duration: 0.5,
		ease: Expo.easeinout
	})
}

cursorfollow();
mainAnimation();


