 //let dateupto = new Date("Dec 15, 2023 23:59:59",'mm d, Y hh:mm:ss');
 let dateupto = new Date("2023-04-21T23:59:59");

 if (dateupto < new Date()) {
      $("#countdown").hide();
      $("#countdownbtn").hide();
      $("#normalbtn").show();
  } else {
      $("#countdown").show();
      $("#normalbtn").hide();
  }


  let $days = document.getElementById('days');
  let $hours = document.getElementById('hours');
  let $minutes = document.getElementById('minutes');
  let $seconds = document.getElementById('seconds');

  setInterval(function() {
      // Calculate the remaining time
      var now = new Date();
      console.log("now",now);
      console.log("dateupto",dateupto);
      var timeLeft = (dateupto - now) / 1000;
      console.log("timeLeft",timeLeft);
      updateClock(timeLeft);
  }, 1000);

  function updateClock(remainingTime) {
      
      // calculate (and subtract) whole days
      let days = Math.floor(remainingTime / 86400);
      remainingTime -= days * 86400;

      // calculate (and subtract) whole hours
      let hours = Math.floor(remainingTime / 3600) % 24;
      remainingTime -= hours * 3600;

      // calculate (and subtract) whole minutes
      let minutes = Math.floor(remainingTime / 60) % 60;
      remainingTime -= minutes * 60;

      // what's left is seconds
      let seconds = Math.floor(remainingTime % 60);
      
      // pad numbers if needed
      $days.innerHTML = padNumber(days);
      $hours.innerHTML = padNumber(hours);
      $minutes.innerHTML = padNumber(minutes);
      $seconds.innerHTML = padNumber(seconds);
  }

  function padNumber(number) {
      return number < 10 ? "0" + number : number;
  }