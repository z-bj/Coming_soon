// Set the date we're counting down to
let countDownDate = new Date("Apr 20, 2023 09:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get todays date and time
  let now = new Date().getTime();

  // Find the distance between now an the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("countdown").innerHTML =
    days + " Days " + hours + " h " + minutes + " min " + seconds + " s ";

  // If the count down is finished, --> Message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "RELEASED!";
  }
}, 1000);

//
