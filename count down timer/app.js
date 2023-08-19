var countDownDate = new Date("july 11, 2023 00:00:00").getTime();
var x = setInterval(function()
{
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
    
},1000);