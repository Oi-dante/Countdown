// ### Ler sobre: Arrow function ###

// Variável para armazenar ID do countdown
let countdownId

// Função que inicia o countdown
const startCountdown = date => {
	countdownId = setInterval(() => {
		const now = new Date().getTime();
		const distance = (date - now);
		
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		document.getElementById("days").innerHTML = days;
		document.getElementById("hours").innerHTML = hours;
		document.getElementById("minutes").innerHTML = minutes;
		document.getElementById("seconds").innerHTML = seconds;
		
		if(distance <= 0) {
			document.getElementById("timer").innerHTML = "The timer is gone"
		}
	}, 1000)
}

// Pegar a data do HTML
const changeTimeBtn = document.getElementById('change-time')

// Função que irá lidar com o click
const handleClick = () => {
	const countdownTimer = document.getElementById('calendar')
	
	// Transformar a data do HTML em uma data que podemos utilizar no JS
	const date = new Date(countdownTimer.value).getTime()
	
	// Resetar countdown
	clearInterval(countdownId)

	// Iniciar countdown
	// ADICIONAR TRATATIVA DE DATA MENOR QUE A ATUA
	
	startCountdown(date)
}



// Evento => executar quando clicar no botão
changeTimeBtn.addEventListener('click', handleClick)
