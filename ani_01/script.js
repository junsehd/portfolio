var cursor = $(".cursor"),
    mouseX = 0,
    mouseY = 0;

$(document).mousemove(function(e){
  mouseX = e.pageX; //pageX값을 mouseX값에 저장
  mouseY = e.pageY;
});
//TweenMax to는 순차대로 진행, {대상=밑에서 지정} ,0.016은 시간 , {속성값}
TweenMax.to({}, 0.016, {
  repeat: -1, //무한반복의 의미
  onRepeat: function(){ //속성을 지정
  TweenMax.set(cursor, {
    css: {
      left: mouseX-20,
      top: mouseY-20
    }
  })
}
});

$(".txt li").mouseenter(function(){
  cursor.addClass("active");
});

$(".txt li").mouseleave(function(){
  cursor.removeClass("active");
});