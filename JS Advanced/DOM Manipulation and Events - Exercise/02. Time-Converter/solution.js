function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let obj = {
        days:1,
        hours:24,
        minutes:1440,
        seconds:86400,
    } 

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    function convert(value, unit) {
       
        let days = value / obj[unit];

        return {
            days:days,
            hours:days*obj.hours,
            minutes:days*obj.minutes,
            seconds:days*obj.seconds,
        }
    }

    function onConvert(e) {
        let input = e.target.parentElement.children[1]

        let time = convert(Number(input.value), input.id)

        days.value = time.days
        hours.value = time.hours
        minutes.value = time.minutes
        seconds.value = time.seconds
    }
}

