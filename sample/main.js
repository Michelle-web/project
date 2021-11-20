$(function () {
    var merry = new Array('願耶誕佳節的好事和幸福都是你的 耶誕快樂！',
        '你怎麼才起床呀 快睜大眼睛 昨夜聖誕老人爬上你的床 在你的枕頭下藏了一個很特別的禮物喔',
        '你知道Bill Gates在聖誕許的願望是什麼嗎？是聖誕老人從窗戶進入屋子，而不是從煙囪！');
    var xmas = new Array("pic/merryxmas.jpg", "pic/merryxmas1.jpg", "pic/merryxmas2.jpg");
    var num = new Array('d',
        'p',
        'y');
    var pic = new Array("pic/merryxmas.jpg", "pic/merryxmas1.jpg", "pic/merryxmas2.jpg");
    $("input").on("click", function () {
        Time();
        if (time.month == 11 && time.date == 25) {
            var numberOfListItem = $(merry).length;
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            var text = document.getElementById("text");
            while (merry[randomChildNumber] == text.innerText) {
                randomChildNumber = Math.floor(Math.random() * numberOfListItem)
            }
            $("h1").text(merry[randomChildNumber])
            document.getElementById("photo").innerHTML = "<img src='" + xmas[randomChildNumber] + "' width=600 height=400>";
        }
        else{
            var numberOfListItem = $(num).length;
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            var text = document.getElementById("text");
            while (num[randomChildNumber] == text.innerText) {
                randomChildNumber = Math.floor(Math.random() * numberOfListItem)
            }
            $("h1").text(num[randomChildNumber])
            document.getElementById("photo").innerHTML = "<img src='" + pic[randomChildNumber] + "' width=600 height=400>";
        }
    });
});