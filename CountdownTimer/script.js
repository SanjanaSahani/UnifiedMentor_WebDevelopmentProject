document.getElementById("start").addEventListener("click", function() {
    const targetDate = new Date(document.getElementById("datetime").value).getTime();

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeRemaining <= 0) {
            document.getElementById("countdown").innerHTML = "Countdown Expired!";
            clearInterval(timerInterval);
        }
    }

    updateCountdown(); 
    const timerInterval = setInterval(updateCountdown, 1000);
});