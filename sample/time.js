 //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    function Obj() {
        var today = new Date();
        var year=today.getFullYear();
        var month=today.getMonth();
        var date=today.getDate();
        var hour=today.getHours();
        var minute=today.getMinutes();
        var second=today.getSeconds();
        document.getElementById("h").innerHTML =today.toLocaleString();
    }
    /*new Date().toLocaleString(undefined, {
        month: "numeric", day: "numeric", 
        hour: "numeric", minute: "numeric", second: "numeric"
    }) 
    for (var x = 0; x < topicCount; x++) {
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x + 1}</td>`);
        $("#courseTable").append(`<td>${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString(undefined, {month: "numeric", day: "numeric"})}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        if(topic[x]=="國定假日")$('td').addClass('selected');
        $("#courseTable").append("</tr>");
    }*/
/*$(document).ready(function(){ 
    $('#button1').click(function(){ 
      $("#courseTable").find("td").remove();
      $("#courseTable").find("tr").remove();
    });
  });*/