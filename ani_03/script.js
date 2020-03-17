(d => {
  const word = d.querySelector(".word");
  
  const shadow = e => {
    const {x, y} = e;
    const gBCR = word.getBoundingClientRect(); //요소의 크기와 요소의 viewport에서 상대적인 위치를 반환

    const moveX = (x - gBCR.left - gBCR.width/2) / gBCR.width * 10; //움직이는 X좌표 범위를 공식으로 지정
    const moveY = (y - gBCR.left - gBCR.height/2) / gBCR.height * 10; //움직이는 Y좌표 범위를 공식으로 지정
    
    transform(moveX,moveY);
  }
  
  const transform = (x, y) => {
    word.style.textShadow = `${x}px ${-y}px 0px rgb(102, 249,255, 0.7),
                             ${-x}px ${y}px 0px rgb(255, 35,251, 0.7),
                             ${y}px ${-x}px 0px rgb(255, 255,73, 0.7),
                             ${-y}px ${x}px 0px rgb(102, 249,255, 0.7)`;
      
  }
  
  window.addEventListener("mousemove",shadow); //마우스를 움직였을때 이벤트 shadow 함수 실행
})(document);
