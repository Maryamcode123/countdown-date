// set the date we are counting down

var countDownDate = new Date("August 2, 2024 16:04:01").getTime();


// update the count every 1 sec
var x = setInterval(function(){
    // get todays date and 
    var now = new Date().getTime();

    // find the distance between now and the countdown date
    var distance = countDownDate - now;

    // time calculation for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    var seconds = Math.floor((distance % (1000*60))/(1000));

    // output the result in and element with id="demo"
    document.getElementById("demo").innerHTML = days +"days" + hours + "hrs" + minutes +"mins" + seconds +"s";

    // if the countdown is Over, write some Text
    if(distance < 0)
    {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
},1000);
