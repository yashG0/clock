const showTime = () => {
    let date = new Date;
    console.log(date);

    // get week
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // get months
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';

    // let dayOfWeek = weekdays[date.getDate()];
    // let dayOfMonths = date.getDate();

    console.log(dayOfWeek);
    
    

    if (h > 12) {
        h = h - 12;
        if (h < 10) {
            h = '0' + h;
        }
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }


    let time = `${h} : ${m} : ${s} ${session}`;
    // document.querySelector('.clock').innerText = time

    document.querySelector('.clock').innerHTML = time
    document.querySelector('.day').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear()
    document.querySelector('.dayOfWeek').innerHTML = weekDays[date.getDay()];
    setTimeout(showTime, 1000)
};

showTime();