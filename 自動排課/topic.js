var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
    ];
var startDate = new Date();
function setMonthAndDay(startMonth, startDay){
//一次設定好月份與日期
startDate.setMonth(startMonth,startDay);
startDate.setHours(0);
startDate.setMinutes(0);
startDate.setSeconds(0);
}
function processFormData() {
  const form = document.forms['form'];
  const month = form.elements.month.value;
  const date = form.elements.date.value;
  alert("你的姓名是 " + month + "\n電子郵件是 " + date);
  setMonthAndDay(4,1);
}