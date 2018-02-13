$(document).ready( function() {

	let greetingMessage = [
	 'Hello and thank you for visiting.',
	 'This site serves as my personal space and portfolio.',
	 'It includes samples of my work,',
	 'as well as my blog space,',
	 'and a place to share my passions.',
	 'Welcome and I hope you enjoy it.'
	]

	if(window.innerHeight > window.innerWidth) {
		$('html').css({fontSize: '1vh'})
	}

	let message = []
	let count = 0
	let msgNum = 0
	let y = 20
	
	setInterval(()=>{
		y = Math.floor(Math.random()*40+40)
	},3000)
	


  setTimeout(()=>{$('.crest')
  	.animate({width: '5vw', left: '0px'},5000)
  },2000)

	$('.story').animate({top: '-215vh'},60000,'swing')
	$('.howler').animate({top: '100vh' ,height: '0px'},7000)

	setInterval(()=>{
		$('.runner').attr('src','resources/images/runRight.gif').animate({left: "130vw", bottom: y+"vh"},6000).css({zIndex: Math.floor(Math.random()*2)})
	},12000)


	setTimeout( function() {
		setInterval(()=>{
		$('.runner').attr('src','resources/images/runLeft.gif').animate({left: '-30vw', bottom: y+'vh'},6000).css({zIndex: Math.floor(Math.random()*2)})
		},12000)
	},6000)

	setTimeout( function() {
		var msgInterval = setInterval(function() {
			let greeting = greetingMessage[msgNum].split('')
			message.push(greeting[count])
			$('.greeting').text(message.join(''))
			count ++
			if (count === greetingMessage[msgNum].length) {
				$('.greeting').animate({opacity: '0',fontSize: '1px'},5000,()=>{ $('.greeting').css({opacity:'1',fontSize: '2rem'})})
			}
			if (count === greetingMessage[msgNum].length+20) {
				count = 0
				msgNum++
				message = []
			}
			if (msgNum === greetingMessage.length) {
				clearInterval(msgInterval)
			  $('.greeting').text('')
			}
		},200)
	}, 55000)


})