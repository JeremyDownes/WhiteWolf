$(document).ready( function() {
	let number = -1
	const wolf = setInterval(function() {
		number++
		$('.runner').attr('src',`resources/images/run${number}.png`)
		number= number%5
	},150)

	let greetingMessage = [
	 'Hello and thank you for visiting.',
	 'This site serves as my personal space and portfolio.',
	 'It includes samples of my work,',
	 'as well as my blog space,',
	 'and a place to share my passions.',
	 'Welcome and I hope you enjoy it.'
	]
	let message = []
	let count = 0
	let msgNum = 0

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
	}, 48000)


})