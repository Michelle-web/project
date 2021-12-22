$(function () {
    var merry = new Array('願耶誕佳節的好事和幸福都是你的 耶誕快樂!',
        '你知道Bill Gates在聖誕許的願望是什麼嗎？是聖誕老人從窗戶進入屋子，而不是從煙囪!',
        '你怎麼才起床呀 快睜大眼睛 昨夜聖誕老人爬上你的床 在你的枕頭下藏了一個很特別的禮物喔');
    var xmas = new Array("pic/merryxmas.jpg", "pic/merryxmas1.jpg", "pic/merryxmas2.jpg");
    var morning = new Array('a',
        'b',
        'c');
    var afternoon = new Array('d',
        'e',
        'f');
    var night = new Array('g',
        'h',
        'i');
    var pic = new Array("pic/merryxmas.jpg", "pic/merryxmas1.jpg", "pic/merryxmas2.jpg");
    $("input").on("click", function () {
        if (time.month == 11 && time.date == 25 ) {
            var numberOfListItem = $(merry).length;
            if(time.hour>12)numberOfListItem--;
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            var text = document.getElementById("text");
            while (merry[randomChildNumber] == text.innerText) {
                randomChildNumber = Math.floor(Math.random() * numberOfListItem)
            }
            $("h1").text(merry[randomChildNumber])
            document.getElementById("photo").innerHTML = "<img src='" + xmas[randomChildNumber] + "' width=600 height=400>";
        }
        else if(time.hour<12){
            var numberOfListItem = $(morning).length;
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            var text = document.getElementById("text");
            while (morning[randomChildNumber] == text.innerText) {
                randomChildNumber = Math.floor(Math.random() * numberOfListItem)
            }
            $("h1").text(morning[randomChildNumber])
            document.getElementById("photo").innerHTML = "<img src='" + pic[randomChildNumber] + "' width=600 height=400>";
        }
        else if(time.hour<18){
            var numberOfListItem = $(afternoon).length;
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            var text = document.getElementById("text");
            while (afternoon[randomChildNumber] == text.innerText) {
                randomChildNumber = Math.floor(Math.random() * numberOfListItem)
            }
            $("h1").text(afternoon[randomChildNumber])
            document.getElementById("photo").innerHTML = "<img src='" + pic[randomChildNumber] + "' width=600 height=400>";
        }
        else{
            var numberOfListItem = $(night).length;
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            var text = document.getElementById("text");
            while (night[randomChildNumber] == text.innerText) {
                randomChildNumber = Math.floor(Math.random() * numberOfListItem)
            }
            $("h1").text(night[randomChildNumber])
            document.getElementById("photo").innerHTML = "<img src='" + pic[randomChildNumber] + "' width=600 height=400>";
        }
    });
});