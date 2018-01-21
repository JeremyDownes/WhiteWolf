$(document).ready( function() {
	let number = -1
	setInterval(function() {
		number++
		$('.runner').attr('src',`resources/images/run${number}.png`)
		number= number%5
	},150)


})