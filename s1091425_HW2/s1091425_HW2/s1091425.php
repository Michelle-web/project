
<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$password = $_POST['password'];
$address = $_POST['address'];
$gender = $_POST['gender'];
?>
<?php
require_once 'phpqrcode/qrlib.php'; 
$path='images/';
$file = $path.uniqid().".png";
$text="something";
QRcode::png($text ,$file,'L',10); 
?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset = "utf-8">
    <title>購物清單</title>
	<link rel = "stylesheet" type = "text/css" href = "shopping website.css">
  <style type = "text/css">
         .special { color: DarkTurquoise; }
      </style>
  </head>
  <body>
  <form method = "post" action = "http://localhost/s1091425.php">
      <table border = "1" width=600 height= 300>
       <tr>
           <td class = "special"><?php print("姓名:"); ?></td>
           <td><?php echo $name;  ?></td>
		   <td class = "special"><?php print("電話:"); ?></td>
           <td><?php echo $tel; ?></td>
       </tr>
       <tr>
		   <td rowspan = "1" colspan = "1" class = "special"><?php print("電子信箱:"); ?></td>
           <td rowspan = "1" colspan = "3" ><?php echo $email; ?></td>
	   </tr>
       <tr>
           <td class = "special"><?php print("密碼:"); ?></td>
           <td><?php echo $password;  ?></td>
		   <td class = "special"><?php print("性別:"); ?></td>
           <td><?php echo $gender;  ?></td>
       </tr>
       <tr>
	       <td rowspan = "1" colspan = "1" class = "special"><?php print("地址:"); ?></td>
           <td rowspan = "1" colspan = "3" ><?php echo $address;  ?></td>
	   </tr>
	   <tr>
	       <td rowspan = "1" colspan = "1" class = "special"><?php print("總金額:"); ?></td>
           <td rowspan = "1" colspan = "3" ><?php
  $sum=0;
  $product = $_POST['product'];
  if(isset($product))
  {
    $n = count($product);
    echo("NT$");
    for($i=0; $i < $n; $i++)
    {
      $sum=$product[$i]+$sum;
    }
	echo $sum;
  }
?></td>
	   </tr>
    </table>
<?php
  $to =$email; //收件者
  $subject = "已下單"; //信件標題
  $msg = '<html><body>';
  $msg ='<p>請確認您的個人資料是否有誤</p>';
  $msg ='<table border = "1" width=600 height= 300>';
  $msg .= "<tr> <td>姓名:</td><td>".$name;
  $msg .="</td><td>電話:</td><td>".$tel;
  $msg .="</td></tr>";
  $msg .="<tr><td rowspan = '1' colspan = '1'>電子信箱:</td>";
  $msg .="<td rowspan = '1' colspan = '3' >".$email;
  $msg .="</td></tr><tr><td >密碼:</td><td>".$password;
  $msg .="</td><td >性別:</td><td>".$gender;
  $msg .="</td></tr><tr><td rowspan = '1' colspan = '1' >地址:</td>";
  $msg .="<td rowspan = '1' colspan = '3' >".$address;
  $msg .="</td></tr><tr><td rowspan = '1' colspan = '1'>總金額:</td>";
  $msg .="<td rowspan = '1' colspan = '3' >".$sum;
  $msg .="</td></tr></table></body></html>";
//信件內容
$headers = "From: michelle061891@gmail.com"; //寄件者
  $headers = 'Content-type: text/html; charset=utf-8';
  if(mail("$to", "$subject", "$msg", "$headers")):
   echo "信件已經發送成功。";//寄信成功就會顯示的提示訊息
  else:
   echo "信件發送失敗！";//寄信失敗顯示的錯誤訊息
  endif;
?>