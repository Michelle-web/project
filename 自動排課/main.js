$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    var millisecsPerDay = 24*60*60*1000;
    for(var x=0;x<topicCount;x++){
    $("#courseTable").append("<tr>");
    $("#courseTable").append(`<td>${x+1}</td>`);
    $("#courseTable").append(`<td>${(startDate.getMonth()+7*x)}/${(startDate.getDate()+7*x)}</td>`);
    $("#courseTable").append(`<td>${topic[x]}</td>`);
    $("#courseTable").append("</tr>");
    }
    });