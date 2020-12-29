let day = new Date().getDay();

switch (day){

    case 1:

        document.getElementById("day").innerHTML = 'Monday...';
        document.getElementById("desc").innerHTML = 'The start of another week right after a a short break'
        break;

    case 2:

        document.getElementById("day").innerHTML = 'Tuesday';
        document.getElementById("desc").innerHTML = 'The day after Moody Monday';
        break;

    case 3:

        document.getElementById("day").innerHTML = 'Wednesday';
        document.getElementById("desc").innerHTML = 'You\'re about halfway to the weekends';
        break;

    case 4:

        document.getElementById("day").innerHTML = 'Thursday';
        document.getElementById("desc").innerHTML = 'Just hold on a bit longer';
        break;

    case 5:

        document.getElementById("day").innerHTML = 'Friday!';
        document.getElementById("desc").innerHTML = 'You\'re finally at the last weekday!';
        break;

    case 6:

        document.getElementById("day").innerHTML = 'Saturday!';
        document.getElementById("desc").innerHTML = 'You\'ve arrived at the weekends!';
        break;

    case 0:

        document.getElementById("day").innerHTML = 'Sunday';
        document.getElementById("desc").innerHTML = 'Make the most of it';
        break;

}