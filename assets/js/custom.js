$(document).ready(function() {
    //섹션 1,2,5 꽉차게 지정
    $(window).resize(function () {
        var h = $(window).height();
		
        $("#section1").height(h);
        $("#section2").height(h);
        $("#section5").height(h);	

    }); //resize

    //시작하자마자 강제로 실행
    $(window).trigger("resize");
    
    //시작 로고 클릭 메뉴
    $(".out_logo").click(function (e) {
		e.preventDefault();
        $(".out_logo").fadeOut(2000);
        $("body").addClass("active");

        $(".out_bg1").stop().animate({left:"-200%"}, 1000);
        $(".out_bg2").stop().animate({right:"-200%"}, 1000);
    });
    
    //dot 메뉴
    var dot = $("#dot > ul > li");
    var cont = $("#contents > section");

    dot.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        var sections = cont.eq(index);
        var dotOffset = sections.offset().top;
        $("html,body").stop().animate({scrollTop:dotOffset},500,"easeInOutExpo");
    });
    
    //PC 태블릿 햄버거 메뉴
    $(".menu").click(function (e) {
        e.preventDefault();
        //$("body").toggleClass("scroll");
        $(".inner_menu").toggleClass("show");
        $(".sub_menu").toggleClass("show");
        $(".menu_left li").eq(5).show();
        
        //메뉴 사진 변경
        if ($(".inner_menu").hasClass("show")) {
            $(".menu").find("img").attr("src", "./assets/img/menu_off.png");
        } else {
            $(".menu").find("img").attr("src", "./assets/img/menu_on.png");
        }

        //서브메뉴 마우스 오버되면 할일    
        $(".menu_right li a").mouseover(function () {
            $(".menu_left li").hide();
            var num = $(this).parent().index();
            $(".menu_left li").eq(num).show();
        });
        
        //서브메뉴 마우스가 떠나면 할일
        $(".menu_right li a").mouseleave(function () {
            $(".menu_left li").stop().hide();
        });
        
        //링크를 클릭하면 클래스 제거
        $(".menu_right li a").click(function(){
            //$("body").removeClass("scroll");
            $(".inner_menu").removeClass("show");
            $(".sub_menu").removeClass("show");
            $(".menu").find("img").attr("src", "./assets/img/menu_on.png");
        });
        
    }); //메뉴
	
	//모바일 햄버거 메뉴
	$(".m_menu").click(function (e) {
        e.preventDefault();
        $("body").toggleClass("scroll");
        $(".inner_menu").toggleClass("show");
        $(".sub_menu").toggleClass("show");
		
		//메뉴 아이콘 변경
        if ($(".inner_menu").hasClass("show")) {
            $(".m_menu i").removeClass("fa-bars");
			$(".m_menu i").addClass("fa-times");
        } else {
            $(".m_menu i").removeClass("fa-times");
            $(".m_menu i").addClass("fa-bars");
        }
        
        //링크를 클릭하면 클래스 제거
        $(".menu_right li a").click(function(){
            $("body").removeClass("scroll");
            $(".inner_menu").removeClass("show");
            $(".sub_menu").removeClass("show");
			$(".m_menu i").removeClass("fa-times");
            $(".m_menu i").addClass("fa-bars");
        });
        
    }); //메뉴
	
    //section2 캐릭터 클릭시 모달창
    $(".keeper img").click(function(e){
        e.preventDefault();
        $(".keeper img").attr("src","./assets/img/keeper_02.png");
        $("#modal").removeAttr("class").addClass("on");
    });
    
    $(".close").click(function(e){
		e.preventDefault();
        $(".keeper img").attr("src","./assets/img/keeper_01.png");
        $("#modal").addClass("out");
    });
    
	//dot 메뉴 오프셋탑값 변수 저장
    var dTop = $("#dot").offset().top+100;
	
    //스크롤 시 애니메이션
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        var winHight = 200;
        var winHight2 = 400;
        var winHight3 = 600;
        
		//스크롤시 dot 메뉴 부분 효과
		$("#dot").stop().animate({"top":dTop+wScroll},500);
		
        //dot 메뉴 스크롤 color
        if(wScroll > $(".sec1").offset().top){
            $("#dot").removeClass("color");
        }
        
        if(wScroll > $(".sec2").offset().top - winHight){
            $("#dot").addClass("color");
        }
        
        if(wScroll > $(".sec3").offset().top - winHight){
            $("#dot").removeClass("color");
        }
		
		if(wScroll > $(".sec4").offset().top - winHight){
            $("#dot").addClass("color");
        }
		
		if(wScroll > $(".sec5").offset().top - winHight){
            $("#dot").removeClass("color");
        }


        //section2
        if(wScroll >= $(".sec2 .sub_desc").offset().top - winHight2){
            $(".sec2 .sub_desc").addClass("show");
        }else {
            $(".sec2 .sub_desc").removeClass("show");
        }
        if(wScroll >= $(".sec2 h3").offset().top - winHight2){
            $(".sec2 h3").addClass("show");
        }else {
            $(".sec2 h3").removeClass("show");
        }
        if(wScroll >= $(".keeper img").offset().top - winHight2){
            $(".keeper img").addClass("show");
            $(".s2_bg").addClass("show");
        }else {
            $(".keeper img").removeClass("show");
            $(".s2_bg").removeClass("show");
        }
        if(wScroll >= $(".sec2 .click2").offset().top - winHight3){
            $(".sec2 .click2").addClass("show");
        }else {
            $(".sec2 .click2").removeClass("show");
        }
        
        if(wScroll >= $(".skill").offset().top - winHight3){
             $(".skill").addClass("show");
        }else {
             $(".skill").removeClass("show");
        }

		
        //section3
        if(wScroll >= $(".sec3 .sub_desc").offset().top - winHight2){
            $(".sec3 .sub_desc").addClass("show");
        }else {
            $(".sec3 .sub_desc").removeClass("show");
        }
        if(wScroll >= $(".sec3 h3").offset().top - winHight2){
            $(".sec3 h3").addClass("show");
        }else {
            $(".sec3 h3").removeClass("show");
        }
        
        //왼쪽 컨텐츠
        if(wScroll >= $(".sec3 .cont_left .s3_text").offset().top - winHight2){
            $(".sec3 .cont_left .s3_text").addClass("show");
            $(".sec3 .cont_left .s3_img").addClass("show");
        }else {
            $(".sec3 .cont_left .s3_text").removeClass("show");
            $(".sec3 .cont_left .s3_img").removeClass("show");
        }
        
        if(wScroll >= $(".sec3 .cont_left .s3_text").eq(1).offset().top - winHight2){
            $(".sec3 .cont_left .s3_text").eq(1).addClass("show");
            $(".sec3 .cont_left .s3_img").eq(1).addClass("show");
        }else {
            $(".sec3 .cont_left .s3_text").eq(1).removeClass("show");
            $(".sec3 .cont_left .s3_img").eq(1).removeClass("show");
        }   
        if(wScroll >= $(".sec3 .cont_left .s3_text").eq(2).offset().top - winHight2){
            $(".sec3 .cont_left .s3_text").eq(2).addClass("show");
            $(".sec3 .cont_left .s3_img").eq(2).addClass("show");
        }else {
            $(".sec3 .cont_left .s3_text").eq(2).removeClass("show");
            $(".sec3 .cont_left .s3_img").eq(2).removeClass("show");
        }  
        if(wScroll >= $(".sec3 .cont_left .s3_text").eq(3).offset().top - winHight2){
            $(".sec3 .cont_left .s3_text").eq(3).addClass("show");
            $(".sec3 .cont_left .s3_img").eq(3).addClass("show");
        }else {
            $(".sec3 .cont_left .s3_text").eq(3).removeClass("show");
             $(".sec3 .cont_left .s3_img").eq(3).removeClass("show");
        }
		

        //오른쪽 컨텐츠
        if(wScroll >= $(".sec3 .cont_right .s3_text").offset().top - winHight2){
            $(".sec3 .cont_right .s3_text").addClass("show");
            $(".sec3 .cont_right .s3_img").addClass("show");
        }else {
            $(".sec3 .cont_right .s3_text").removeClass("show");
            $(".sec3 .cont_right .s3_img").removeClass("show");
        }


        if(wScroll >= $(".sec3 .cont_right .s3_text").eq(1).offset().top - winHight2){
            $(".sec3 .cont_right .s3_text").eq(1).addClass("show");
            $(".sec3 .cont_right .s3_img").eq(1).addClass("show");
        }else {
            $(".sec3 .cont_right .s3_text").eq(1).removeClass("show");
            $(".sec3 .cont_right .s3_img").eq(1).removeClass("show");
        }
        if(wScroll >= $(".sec3 .cont_right .s3_text").eq(2).offset().top - winHight2){
            $(".sec3 .cont_right .s3_text").eq(2).addClass("show");
            $(".sec3 .cont_right .s3_img").eq(2).addClass("show");
        }else {
            $(".sec3 .cont_right .s3_text").eq(2).removeClass("show");
            $(".sec3 .cont_right .s3_img").eq(2).removeClass("show");
        }
		if(wScroll >= $(".sec3 .cont_right .s3_text").eq(3).offset().top - winHight2){
            $(".sec3 .cont_right .s3_text").eq(3).addClass("show");
            $(".sec3 .cont_right .s3_img").eq(3).addClass("show");
        }else {
            $(".sec3 .cont_right .s3_text").eq(3).removeClass("show");
            $(".sec3 .cont_right .s3_img").eq(3).removeClass("show");
        }
	
		
		//section4
        if(wScroll >= $(".sec4 .sub_desc").offset().top - winHight2){
            $(".sec4 .sub_desc").addClass("show");
        }else {
            $(".sec4 .sub_desc").removeClass("show");
        }
        if(wScroll >= $(".sec4 h3").offset().top - winHight2){
            $(".sec4 h3").addClass("show");
        }else {
            $(".sec4 h3").removeClass("show");
        }
        
        //왼쪽 컨텐츠
        if(wScroll >= $(".sec4 .cont_left .s4_text").offset().top - winHight2){
            $(".sec4 .cont_left .s4_text").addClass("show");
            $(".sec4 .cont_left .animate").addClass("show");
        }else {
            $(".sec4 .cont_left .s4_text").removeClass("show");
            $(".sec4 .cont_left .animate").removeClass("show");
        }
        
        if(wScroll >= $(".sec4 .cont_left .s4_text").eq(1).offset().top - winHight2){
            $(".sec4 .cont_left .s4_text").eq(1).addClass("show");
            $(".sec4 .cont_left .animate").eq(1).addClass("show");
        }else {
            $(".sec4 .cont_left .s4_text").eq(1).removeClass("show");
            $(".sec4 .cont_left .animate").eq(1).removeClass("show");
        }   
        if(wScroll >= $(".sec4 .cont_left .s4_text").eq(2).offset().top - winHight2){
            $(".sec4 .cont_left .s4_text").eq(2).addClass("show");
            $(".sec4 .cont_left .animate").eq(2).addClass("show");
        }else {
            $(".sec4 .cont_left .s4_text").eq(2).removeClass("show");
            $(".sec4 .cont_left .animate").eq(2).removeClass("show");
        }  
        if(wScroll >= $(".sec4 .cont_left .s4_text").eq(3).offset().top - winHight2){
            $(".sec4 .cont_left .s4_text").eq(3).addClass("show");
            $(".sec4 .cont_left .animate").eq(3).addClass("show");
        }else {
            $(".sec4 .cont_left .s4_text").eq(3).removeClass("show");
             $(".sec4 .cont_left .animate").eq(3).removeClass("show");
        }

        //오른쪽 컨텐츠
        if(wScroll >= $(".sec4 .cont_right .s4_text").offset().top - winHight2){
            $(".sec4 .cont_right .s4_text").addClass("show");
            $(".sec4 .cont_right .animate").addClass("show");
        }else {
            $(".sec4 .cont_right .s4_text").removeClass("show");
            $(".sec4 .cont_right .animate").removeClass("show");
        }


        if(wScroll >= $(".sec4 .cont_right .s4_text").eq(1).offset().top - winHight2){
            $(".sec4 .cont_right .s4_text").eq(1).addClass("show");
            $(".sec4 .cont_right .animate").eq(1).addClass("show");
        }else {
            $(".sec4 .cont_right .s4_text").eq(1).removeClass("show");
            $(".sec4 .cont_right .animate").eq(1).removeClass("show");
        }
        if(wScroll >= $(".sec4 .cont_right .s4_text").eq(2).offset().top - winHight2){
            $(".sec4 .cont_right .s4_text").eq(2).addClass("show");
            $(".sec4 .cont_right .animate").eq(2).addClass("show");
        }else {
            $(".sec4 .cont_right .s4_text").eq(2).removeClass("show");
            $(".sec4 .cont_right .animate").eq(2).removeClass("show");
        }
		
		//section5
        if(wScroll >= $(".sec5 .sub_desc").offset().top - winHight2){
            $(".sec5 .sub_desc").addClass("show");
        }else {
            $(".sec5 .sub_desc").removeClass("show");
        }
        if(wScroll >= $(".sec5 h3").offset().top - winHight2){
            $(".sec5 h3").addClass("show");
        }else {
            $(".sec5 h3").removeClass("show");
        }
		if(wScroll >= $(".sec5 .contact").offset().top - winHight2){
            $(".sec5 .contact").addClass("show");
        }else {
            $(".sec5 .contact").removeClass("show");
        }
		

    });//스크롤
    
}); //function