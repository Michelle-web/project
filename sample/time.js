var time={
    year:"",
    month:"",
    date:"",
    hour:"",
    minute:"",
    second:""
}
function Time() {
    var today = new Date();
    time.year=today.getFullYear();
    time.month=today.getMonth();
    time.date=today.getDate();
    time.hour=today.getHours();
    time.minute=today.getMinutes();
    time.second=today.getSeconds();
    document.getElementById("time").innerHTML =today.toLocaleString();
    setTimeout('Time()',100);
}