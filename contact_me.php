<?php
header("Content-Type: text/html; charset=UTF-8");
 
// 빈 필드가 있는지 확인하는 구문
if(empty($_POST['name'])  		|| // post로 넘어온 name값이 비었는지 확인
   empty($_POST['email']) 		|| // email값이 비었는지 확인
   empty($_POST['phone']) 		|| // phone값이 비었는지 확인
   empty($_POST['message'])	|| // message값이 비었는지 확인
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) // 전달된 이메일 값이 유효한 이메일값인지 검증
   {
	echo ' 
	<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>편지</title>
	<style>
	@import url("https://fonts.googleapis.com/css?family=Gaegu");
	* {
	  box-sizing: border-box;
	}

	body {
	  background: #2f2e30; 
	  font-family: "Gaegu", cursive;
	}

	.container {
	  width: 130px;
	  height:195px;
	  margin: 20px auto;
	  text-align: center;
	  position: absolute;
	  left:50%;
	  top:50%;
	  transform:translate(-50%,-50%);
	}
	.container h1{
		position:absolute;
		top:-40px;
		color:#fff;
		font-size:25px;
		width:100%;
		text-align:center;
		word-break:keep-all;
	}
	.envelope {
	  background: #ca336d;
	  width: 100%;
	  height: 80px;
	  position: relative;
	  box-shadow: 0 5px 0 #3a3d3c;
	  margin: 85px 0 30px 0;
	  z-index: 1;
	}

	.envelope:before,
	.envelope:after {
	  content: "";
	  position: absolute;
	  bottom: 0;  
	}

	.envelope:before {
	  right: 0;
	  border-bottom: 0px solid transparent;
	  border-top: 80px solid transparent;
	  border-right: 130px solid #dc447f;
	  z-index: 1;
	}

	.envelope:after {
	  left: 0;
	  border-bottom: 0px solid transparent;
	  border-top: 80px solid transparent;
	  border-left: 130px solid #ea4c89;  
	  z-index: 1;
	}

	.open {
	  border-right: 65px solid transparent;
	  border-top: 40px solid #c8336c;
	  border-left: 65px solid transparent;  
	  position: absolute;
	  z-index: 9999;
	  left: 0;
	  top: 86px;
	  transform-origin: 0% 0%;
	}

	.paper {
	  width: 110px;
	  height: 75px;
	  position: absolute;
	  bottom: 0;
	  left: 50%;
	  margin-left: -55px;
	  background: #f2f2f2;
	  z-index: 0;
	}

	.paper:before {
	  content: "";
	  position: absolute;
	}  

	.paper:before {
	  width: 110px;
	  height: 75px;
	  background: rgba(177,177,177,0.1);
	  bottom: 0;
	  left: 0;
	}

	.noti {
	  position: absolute;
	  top: -15px;
	  right: -15px;
	  width: 35px;
	  height: 35px;
	  border-radius: 35px;
	  color: #fff;
	  font: bold 20px/36px;
	  text-align: center;
	  background: #2ecc71;
	  box-shadow: 0 4px 0 rgba(216,217,216, 0.7);
	  opacity: 0;  
	}

	ul {
	  margin: 25px auto 0 auto;
	  padding: 0;
	  display: block;
	  width: 80%;
	}

	li {
	  list-style: none;
	  background: #d3d3d3;
	  width: 100%;
	  height: 5px;
	  margin-bottom: 5px;
	}

	li:nth-child(1) {
	  width: 50%;  
	}

	li:nth-child(2) {
	  margin-bottom: 20px;  
	  width: 20%;
	}

	a {
	  background: #878387;
	  text-decoration: none;
	  text-transform: uppercase;
	  color: #fff;
	  letter-spacing: 1px;
	  font: bold 13px; 
	  padding: 8px 15px;
	  box-shadow: 0 3px 0 #2a2c2b;
	}

	a:active,
	a:hover {
	   box-shadow: 0 1px 0 #2a2c2b;
	}

	.is-active .open {
	  animation: foldUp 2.5s ease-in-out infinite alternate; 
	  animation-fill-mode: forwards;
	}
	  
	.is-active .paper {
	  animation: paperUp 2.5s ease-in-out infinite alternate; 
	  animation-fill-mode: forwards;
	}

	.is-active .noti {
	  animation: noti 2.5s ease-in-out infinite alternate; 
	  animation-fill-mode: forwards;
	}

	@keyframes foldUp {  
	0% {  
		transform: rotateX(0deg);
	}  
	50% {  
		transform:rotateX(180deg);
		z-index: 0;
	   }  
	   100% {  
		transform:rotateX(180deg);
		z-index: 0;
	   } 
	}

	@keyframes noti {  
	  0% {  
		opacity: 0;
	  } 
	  80% {  
		opacity: 0;
	  }
	  100% {  
		opacity: 1;
	   }  
	}


	@keyframes paperUp {  
	  0%{  
		  height: 75px;
	  }
50%{ height: 75px;
}	  
60% {
		  height: 130px;
	  } 70% {
		  height: 110px;
	  } 80% {
		  height: 130px;
	  } 90% {
		  height: 120px;
	  } 100% {
		  height: 130px;
	  }  
	}
	
	</style>
</head>
<body>
	<div class="container is-active">
  <h1>메일 전송을 실패하였습니다.</h1>
  <div class="envelope">
    <div class="paper">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="noti">1</div>
    </div>
  </div>
  
  <div class="open"></div>
  
  <a href="./index.html">메인으로 돌아가기</a>
  
</div>
</body>';
	
	return false;
   }
// Cross-Site Scripting (XSS)을 방지하는 시큐어코딩
// strip_tags() -> 문자열에서 html과 php태그를 제거한다
// htmlspecialchars() -> 특수 문자를 HTML 엔터티로 변환
// 악의적인 특수문자 삽입에 대비하기 위함
 
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
//$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// 이메일을 생성하고 메일을 전송하는 부분
$to = "junsehd@naver.com"; // 받는 측의 이메일 주소를 기입하는 부분
$email_subject = "FROM:  $name"; // 메일 제목에 해당하는 부분
$email_body = "본 메일은 홈페이지 폼메일로부터 전송된 이메일입니다..\n\n"."세부정보는 다음과 같습니다.\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "Reply-To: $email_address\r"; // 답장 주소
 
mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body,$headers);
if($status)
{ 
    echo '
	<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>편지</title>
	<style>
	@import url("https://fonts.googleapis.com/css?family=Gaegu");
	* {
	  box-sizing: border-box;
	}

	body {
	  background: #2f2e30; 
	  font-family: "Gaegu", cursive;
	}

	.container {
	  width: 130px;
	  height:195px;
	  margin: 20px auto;
	  text-align: center;
	  position: absolute;
	  left:50%;
	  top:50%;
	  transform:translate(-50%,-50%);
	}
	.container h1{
		position:absolute;
		top:-40px;
		color:#fff;
		font-size:25px;
		width:100%;
		text-align:center;
		word-break:keep-all;
	}
	.envelope {
	  background: #ca336d;
	  width: 100%;
	  height: 80px;
	  position: relative;
	  box-shadow: 0 5px 0 #3a3d3c;
	  margin: 85px 0 30px 0;
	  z-index: 1;
	}

	.envelope:before,
	.envelope:after {
	  content: "";
	  position: absolute;
	  bottom: 0;  
	}

	.envelope:before {
	  right: 0;
	  border-bottom: 0px solid transparent;
	  border-top: 80px solid transparent;
	  border-right: 130px solid #dc447f;
	  z-index: 1;
	}

	.envelope:after {
	  left: 0;
	  border-bottom: 0px solid transparent;
	  border-top: 80px solid transparent;
	  border-left: 130px solid #ea4c89;  
	  z-index: 1;
	}

	.open {
	  border-right: 65px solid transparent;
	  border-top: 40px solid #c8336c;
	  border-left: 65px solid transparent;  
	  position: absolute;
	  z-index: 9999;
	  left: 0;
	  top: 86px;
	  transform-origin: 0% 0%;
	}

	.paper {
	  width: 110px;
	  height: 75px;
	  position: absolute;
	  bottom: 0;
	  left: 50%;
	  margin-left: -55px;
	  background: #f2f2f2;
	  z-index: 0;
	}

	.paper:before {
	  content: "";
	  position: absolute;
	}  

	.paper:before {
	  width: 110px;
	  height: 75px;
	  background: rgba(177,177,177,0.1);
	  bottom: 0;
	  left: 0;
	}

	.noti {
	  position: absolute;
	  top: -15px;
	  right: -15px;
	  width: 35px;
	  height: 35px;
	  border-radius: 35px;
	  color: #fff;
	  font: bold 20px/36px;
	  text-align: center;
	  background: #2ecc71;
	  box-shadow: 0 4px 0 rgba(216,217,216, 0.7);
	  opacity: 0;  
	}

	ul {
	  margin: 25px auto 0 auto;
	  padding: 0;
	  display: block;
	  width: 80%;
	}

	li {
	  list-style: none;
	  background: #d3d3d3;
	  width: 100%;
	  height: 5px;
	  margin-bottom: 5px;
	}

	li:nth-child(1) {
	  width: 50%;  
	}

	li:nth-child(2) {
	  margin-bottom: 20px;  
	  width: 20%;
	}

	a {
	  background: #878387;
	  text-decoration: none;
	  text-transform: uppercase;
	  color: #fff;
	  letter-spacing: 1px;
	  font: bold 13px; 
	  padding: 8px 15px;
	  box-shadow: 0 3px 0 #2a2c2b;
	}

	a:active,
	a:hover {
	   box-shadow: 0 1px 0 #2a2c2b;
	}

	.is-active .open {
	  animation: foldUp 2.5s ease-in-out infinite alternate; 
	  animation-fill-mode: forwards;
	}
	  
	.is-active .paper {
	  animation: paperUp 2.5s ease-in-out infinite alternate; 
	  animation-fill-mode: forwards;
	}

	.is-active .noti {
	  animation: noti 2.5s ease-in-out infinite alternate; 
	  animation-fill-mode: forwards;
	}

	@keyframes foldUp {  
	0% {  
		transform: rotateX(0deg);
	}  
	50% {  
		transform:rotateX(180deg);
		z-index: 0;
	   }  
	   100% {  
		transform:rotateX(180deg);
		z-index: 0;
	   } 
	}

	@keyframes noti {  
	  0% {  
		opacity: 0;
	  } 
	  80% {  
		opacity: 0;
	  }
	  100% {  
		opacity: 1;
	   }  
	}


	@keyframes paperUp {  
	  0%{  
		  height: 75px;
	  }
50%{ height: 75px;
}	  
60% {
		  height: 130px;
	  } 70% {
		  height: 110px;
	  } 80% {
		  height: 130px;
	  } 90% {
		  height: 120px;
	  } 100% {
		  height: 130px;
	  }  
	}
	
	</style>
</head>
<body>
	<div class="container is-active">
  <h1>메일을 전송하였습니다.</h1>
  <div class="envelope">
    <div class="paper">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="noti">1</div>
    </div>
  </div>
  
  <div class="open"></div>
  
  <a href="./index.html">메인으로 돌아가기</a>
  
</div>
</body>';
} else { 
    echo '
	<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>편지</title>
	<style>
	@import url("https://fonts.googleapis.com/css?family=Gaegu");
	* {
	  box-sizing: border-box;
	}

	body {
	  background: #2f2e30; 
	  font-family: "Gaegu", cursive;
	}

	.container {
	  width: 130px;
	  height:195px;
	  margin: 20px auto;
	  text-align: center;
	  position: absolute;
	  left:50%;
	  top:50%;
	  transform:translate(-50%,-50%);
	}
	.container h1{
		position:absolute;
		top:-40px;
		color:#fff;
		font-size:25px;
		width:100%;
		text-align:center;
		word-break:keep-all;
	}
	.envelope {
	  background: #ca336d;
	  width: 100%;
	  height: 80px;
	  position: relative;
	  box-shadow: 0 5px 0 #3a3d3c;
	  margin: 85px 0 30px 0;
	  z-index: 1;
	}

	.envelope:before,
	.envelope:after {
	  content: "";
	  position: absolute;
	  bottom: 0;  
	}

	.envelope:before {
	  right: 0;
	  border-bottom: 0px solid transparent;
	  border-top: 80px solid transparent;
	  border-right: 130px solid #dc447f;
	  z-index: 1;
	}

	.envelope:after {
	  left: 0;
	  border-bottom: 0px solid transparent;
	  border-top: 80px solid transparent;
	  border-left: 130px solid #ea4c89;  
	  z-index: 1;
	}

	.open {
	  border-right: 65px solid transparent;
	  border-top: 40px solid #c8336c;
	  border-left: 65px solid transparent;  
	  position: absolute;
	  z-index: 9999;
	  left: 0;
	  top: 86px;
	  transform-origin: 0% 0%;
	}

	.paper {
	  width: 110px;
	  height: 75px;
	  position: absolute;
	  bottom: 0;
	  left: 50%;
	  margin-left: -55px;
	  background: #f2f2f2;
	  z-index: 0;
	}

	.paper:before {
	  content: "";
	  position: absolute;
	}  

	.paper:before {
	  width: 110px;
	  height: 75px;
	  background: rgba(177,177,177,0.1);
	  bottom: 0;
	  left: 0;
	}

	.noti {
	  position: absolute;
	  top: -15px;
	  right: -15px;
	  width: 35px;
	  height: 35px;
	  border-radius: 35px;
	  color: #fff;
	  font: bold 20px/36px;
	  text-align: center;
	  background: #2ecc71;
	  box-shadow: 0 4px 0 rgba(216,217,216, 0.7);
	  opacity: 0;  
	}

	ul {
	  margin: 25px auto 0 auto;
	  padding: 0;
	  display: block;
	  width: 80%;
	}

	li {
	  list-style: none;
	  background: #d3d3d3;
	  width: 100%;
	  height: 5px;
	  margin-bottom: 5px;
	}

	li:nth-child(1) {
	  width: 50%;  
	}

	li:nth-child(2) {
	  margin-bottom: 20px;  
	  width: 20%;
	}

	a {
	  background: #878387;
	  text-decoration: none;
	  text-transform: uppercase;
	  color: #fff;
	  letter-spacing: 1px;
	  font: bold 13px; 
	  padding: 8px 15px;
	  box-shadow: 0 3px 0 #2a2c2b;
	}

	a:active,
	a:hover {
	   box-shadow: 0 1px 0 #2a2c2b;
	}

	.is-active .open {
	  animation: foldUp 2.5s ease-in-out infinite alternate; 
	  animation-fill-mode: forwards;
	}
	  
	.is-active .paper {
	  animation: paperUp 2.5s ease-in-out infinite alternate; 
	  animation-fill-mode: forwards;
	}

	.is-active .noti {
	  animation: noti 2.5s ease-in-out infinite alternate; 
	  animation-fill-mode: forwards;
	}

	@keyframes foldUp {  
	0% {  
		transform: rotateX(0deg);
	}  
	50% {  
		transform:rotateX(180deg);
		z-index: 0;
	   }  
	   100% {  
		transform:rotateX(180deg);
		z-index: 0;
	   } 
	}

	@keyframes noti {  
	  0% {  
		opacity: 0;
	  } 
	  80% {  
		opacity: 0;
	  }
	  100% {  
		opacity: 1;
	   }  
	}


	@keyframes paperUp {  
	  0%{  
		  height: 75px;
	  }
50%{ height: 75px;
}	  
60% {
		  height: 130px;
	  } 70% {
		  height: 110px;
	  } 80% {
		  height: 130px;
	  } 90% {
		  height: 120px;
	  } 100% {
		  height: 130px;
	  }  
	}
	
	</style>
</head>
<body>
	<div class="container is-active">
  <h1>메일 전송하였습니다.</h1>
  <div class="envelope">
    <div class="paper">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="noti">1</div>
    </div>
  </div>
  
  <div class="open"></div>
  
  <a href="./index.html" style="white-space:nowrap;">메인으로 돌아가기</a>
  
</div>
</body>';
}

return true;		



	
?>