$(function () {
    var merry = new Array('願耶誕佳節的好事和幸福都是你的 耶誕快樂!',
        '你知道Bill Gates在聖誕許的願望是什麼嗎？是聖誕老人從窗戶進入屋子，而不是從煙囪!',
        '你怎麼才起床呀 快睜大眼睛 昨夜聖誕老人爬上你的床 在你的枕頭下藏了一個很特別的禮物喔');
        var xmas = new Array("pic/merryxmas.jpg", "pic/merryxmas1.jpg", "pic/merryxmas2.jpg");
    var morning = new Array('早上啦 公雞要起來報時啦',
        '起床啦 起床啦 起床啦 要遲到了啦',
        '早上好 又是新的一天 願你有個美好一天');
        var picm = new Array("pic/chicken.jpg", "pic/alarm.jpg", "pic/daylight.jpg");
    var afternoon = new Array('下午好 記得吃午餐喔',
        '已經過了半天 下半天也要加油喔',
        '不管你待會要做什麼事 都祝你能夠事事順心');
        var pica = new Array("pic/lunch.jpg", "pic/lucky.jpg", "pic/smile.jpg");
    var night = new Array('晚上好 工作辛苦了 好好休息吧',
        '晚安 祝你好夢和睡眠安穩',
        '想想今天所發生的所有美好事物，好好地迎接明天的到來吧');
        var picn = new Array("pic/relax.jpg", "pic/dreams.jpg", "pic/night.jpg");
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
            document.getElementById("photo").innerHTML = "<img src='" + picm[randomChildNumber] + "' width=600 height=400>";
        }
        else if(time.hour<18){
            var numberOfListItem = $(afternoon).length;
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            var text = document.getElementById("text");
            while (afternoon[randomChildNumber] == text.innerText) {
                randomChildNumber = Math.floor(Math.random() * numberOfListItem)
            }
            $("h1").text(afternoon[randomChildNumber])
            document.getElementById("photo").innerHTML = "<img src='" + pica[randomChildNumber] + "' width=600 height=400>";
        }
        else{
            var numberOfListItem = $(night).length;
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            var text = document.getElementById("text");
            while (night[randomChildNumber] == text.innerText) {
                randomChildNumber = Math.floor(Math.random() * numberOfListItem)
            }
            $("h1").text(night[randomChildNumber])
            document.getElementById("photo").innerHTML = "<img src='" + picn[randomChildNumber] + "' width=600 height=400>";
        }
    });
});