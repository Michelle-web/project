$(function(){
    var jsImg = new Array("https://tw.savorjapan.com/gg/content_image/t0039_002_20180115022046.jpg","https://imgcdn.cna.com.tw/www/WebPhotos/1024/20201011/1838x1218_590922953265.jpg","https://img95.699pic.com/photo/50111/0002.jpg_wh300.jpg");
    $("input").on("click",function(){
    //alert("Hi");
    var numberOfListItem = $("li").length;
    var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    $("h1").text($("li").eq(randomChildNumber).text());
    document.getElementById("my_div").innerHTML  = "<img src='"+jsImg[randomChildNumber]+"' width=600 height=400>";
    });
    });