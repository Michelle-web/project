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
  alert(parseInt(month, 10) + parseInt(date, 10));
  startDate.setDate(parseInt(date, 10));
  startDate.setMonth(parseInt(month, 10));
  startDate.setHours(0);
  startDate.setMinutes(0);
  startDate.setSeconds(0);
}
/* function add(a, b) {
  var sum = parseInt(a, 10) + parseInt(b, 10);
  alert(sum);
}
  setMonthAndDay(month, date); 
}*/