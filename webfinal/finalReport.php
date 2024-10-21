<?php
$height = $_POST['height']; //取值
$wight = $_POST['weight'];
$sex = $_POST['sex'];
$set = $_POST['set'];

$set_choice = [0,1800,2400,2800,3200];
$sum = 0;
echo '<table><tr><td width=22%>運動項目</td><td width=22%>時長</td><td width=22%>消耗熱量</td><td width=37%>備註</td></tr>';
$json = $_POST['excJson'];
for ($i=0; $i<sizeof($json); $i++) {
	echo '<tr><td>'.$json[$i]["excercise"].'</td>';
	echo '<td>'.$json[$i]["hour"].'</td>';
	echo '<td>'.$json[$i]["calories"].'</td>';
	echo '<td>'.$json[$i]["tag"].'</td></tr>';
	$sum = $sum + $json[$i]["calories"];
}

//echo $sum;
echo '<tr><td colspan="2">'.'總消耗熱量'.'</td><td colspan="2">'.$sum.'</td></tr>';
echo '</table>';
?>