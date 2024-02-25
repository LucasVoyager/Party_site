AOS.init();

const eventDate = new Date("may 6, 2024 18:00:00");
const eventTimeStamp = eventDate.getTime();

const timer = setInterval(function()  {
    const realTime = new Date();
    const realTimeStamp = realTime.getTime();

    const remainingTime = eventTimeStamp - realTimeStamp;

    const daysInMS = 1000*60*60*24;
    const hoursInMS= 1000*60*60;
    const minInMS= 1000*60;
    const ms = 1000;

    // time until events var
    const days = Math.floor(remainingTime / daysInMS);
    const hours = Math.floor((remainingTime % daysInMS) / hoursInMS);
    const minutes = Math.floor((remainingTime % hoursInMS) / minInMS);
    const seconds = Math.floor((remainingTime % minInMS) / ms);


    document.getElementById('timer').innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}s`;
    if (remainingTime < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML = 'Puts, tu perdeu!!!'
    }
}, 1000);