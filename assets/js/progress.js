$(function () {
    /*
    - 본문의 이미지가 로드 되는 상황을 모니터(실시간 파악)
    - 로딩 진행률에 따라 막대가 늘어나야되고 숫자가 변경된다.
    - 이미지가 모두 로드되면 진행률이 100%면 , 모니터링을 중지하고 검은화면이 위로 올라간다.
    */
    
    var $container = $("#progress"),
        $progressBar = $container.find(".planet_wrap"),
        $progressText = $container.find(".progress-text"),
        
        imgLoad = imagesLoaded("body"), //이미지로드를 파악하기 위해서 변수로 지정
        imgTotal = imgLoad.images.length, //전체 이미지 개수
        imgLoaded = 0, //로드한 이미지 수
        current = 0, //진행률 
        
        progressTimer = setInterval(updateProgress,1000/60); //일정시간마다 할일
    
        //이미지들이 로드할 때 마다 로드한 이미지 수를 늘려준다.
        imgLoad.on("progress",function(){
            imgLoaded++;
        });
    	
        //진행률 -> 바, 숫자 100/192 * 100
        function updateProgress(){
            var target = (imgLoaded/imgTotal) * 100;
            current += (target - current) * 0.1; //속도 조절
            
            //console.log(current);
            //$progressBar.css({width:150+"px"});
            $progressText.text(Math.floor(current)+"%");
            
            if(current > 99.9){
                clearInterval(progressTimer); //멈추려는 함수
                //$container.addClass("progress-complete");
                
                $progressBar.add($progressText).delay(500).animate({opacity:0}, 250, function(){
                    $container.animate({top:"-100%"},1000,"easeInOutQuint");
                });
            }
            
        }//updateProgress
    
});//document ready