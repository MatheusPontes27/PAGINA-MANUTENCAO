

// Seleciona o elemento do cronômetro
const countdownTimer = document.getElementById('countdown-timer');

// Hora de hospedagem do site (defina isso manualmente para o horário exato de hospedagem)
const startTime = new Date('2024-08-08T14:00:00Z'); // Exemplo de hora de hospedagem
const startTimeInSeconds = Math.floor(startTime.getTime() / 1000); // Converte para segundos

// Tempo total desejado para o cronômetro em segundos (exemplo: 3 dias = 259200 segundos)
const totalDurationInSeconds = 259200; // Defina a duração desejada em segundos

// Calcula o tempo restante baseado no tempo atual
let countdownTime = totalDurationInSeconds - (Math.floor((new Date().getTime() / 1000)) - startTimeInSeconds);

// Função para formatar o tempo em dias, horas, minutos e segundos
function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;
    return `${days} dias, ${hours} horas, ${minutes} minutos e ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} segundos`;
}

// Função para atualizar o cronômetro
function updateCountdown() {
    countdownTimer.textContent = formatTime(countdownTime);

    if (countdownTime > 0) {
        countdownTime--;
        // Salva o tempo restante no armazenamento local para persistência
        localStorage.setItem('countdownTime', countdownTime);
    } else {
        clearInterval(interval); // Para o cronômetro quando o tempo chegar a zero
    }
}

// Inicia o cronômetro
updateCountdown(); // Atualiza imediatamente ao carregar a página
const interval = setInterval(updateCountdown, 1000); // Atualiza a cada segundo
