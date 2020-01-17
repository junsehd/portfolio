var $wrap = $(".move_image"),
    cursor = $ (".cursor"),
    //마우스 커서 이동을 위한 변수 선언
    cursorX = 0,
    cursorY = 0,
    //마찰을 줄이기위한 변수 선언
    fmouseX = 0,
    fmouseY = 0,
    //마우스 이동값을 제한하는 전역변수 선언 
    mouseX = 0,
    mouseY = 0,
    //각도를 제한하는 전역변수 선언 
    angleX = 0,
    angleY = 0,
    // 부드럽게 해주기 위해서 선언
    friction = 1/6;

$(window).mousemove(function(e){
 /* x와 y값중 큰값을 뽑아준다  오른쪽으로가면 x축값이 100나오고 왼쪽으로 가면 x축의 값이 -100이나오도록 공식을 설정해보면 만약 가운데에 마우스가 있다면 전체윈도우의 값이 1000이면 1000/2 => 500 가운데있을경우 e.pageX는 500이된다 500 - 500 을빼면 0이 나온다. 100,0 중 min으로 비교하면 작은값은 0 이된다. max -100과 0을 비교하면 0이 크기때문에 0이 나온다.  마우스가 오른쪽으로 이동하게되면 e.pageX 의 좌표가 커진다.
결과적으로 100보다 큰수는 나올수 없다. 이렇게 작성을하면 마우스값에 제한을 둘수가있다. */
  mouseX = Math.max(-100, Math.min(100, $(window).width()/2 - e.pageX));
  mouseY = Math.max(-100, Math.min(100, $(window).height()/2 - e.pageY));
  
  angleX = (12 * mouseX) / 100;
  angleY = (12 * mouseY) / 100;
});
// 움직을 주기위해서 함수를 선언한다.  css의 트랜스폼효과를 3d로 나타낸다.  
function animate(){
  // 마찰 개수를 줄여주는 공식을 선언해준다. 
  fmouseX += (angleX - fmouseX) * friction;
  fmouseY += (angleY - fmouseY) * friction;
  
  $wrap.css({'transform': 'translate(-50%,-50%) perspective(600px) rotateX('+fmouseY+'deg) rotateY('+ -fmouseX+'deg)'});
  // 애니메이션 자바스크립트 메소드 반드시 작성해야 동작한다.
  window.requestAnimationFrame(animate);
};

animate();

//마우스 커서 스크립트 작성
$(document).mousemove(function(e){
  cursorX = e.pageX; //pageX값을 cursorX값에 저장
  cursorY = e.pageY;
});

//TweenMax to는 순차대로 진행, {대상=밑에서 지정} ,0.016은 시간 , {속성값}
TweenMax.to({}, 0.016, {
  repeat: -1, //무한반복의 의미
  onRepeat: function(){ //속성을 지정
  TweenMax.set(cursor, {
    css: {
      left: cursorX - 20,
      top: cursorY - 20
    }
  })
}
});