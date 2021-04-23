var topic = [
  "尚未開學",
  "國定假日",
  "環境準備",
  "隨機性",
  "重複性",
  "條件判斷"
];
var startDate = new Date();
function setMonthAndDay(month, date) {
  startDate.setMonth(month-1,date);
  startDate.setHours(0);
  startDate.setMinutes(0);
  startDate.setSeconds(0);
  Obj();
}
/* function add(a, b) {
  var sum = parseInt(a, 10) + parseInt(b, 10);
  alert(sum);
}
}
function add(month, date) {
  alert(month);

}*/