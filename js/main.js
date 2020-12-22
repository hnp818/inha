$(document).ready(function() {
    

    new WOW().init();

    $(window).resize(function(){ //스크린 크기가 바뀌면 새로고침하기
        window.location.reload();
        
        
    });

    $("header").on('mouseover',function(){    //on() : 마우스에 관련된 메서드 //on(마우스 이벤트,실행구) 
        $('.header').css({'background':' rgba(255, 255, 255, .5)'});    
        // $(this).css({'color':'pink','text-decoration':'underline'}); 이렇게 해도됨        
        $('.header .logo a').css({'background-position':'0 60px'});    
        $('.header .gnb .gnb_a').css({'color':'black','font-weight': '500'});  
        $('.h_menu .search_input').css({'border-bottom':'3px solid black'});     
        $('.h_menu a').css({'color':'black'});    

    })
     .on('mouseout',function(){
        $('.header').css({'background':' rgba(255, 255, 255, 0)'});
        $('.header .logo a').css({'background-position':'0 0px'});   
        $('.header .gnb .gnb_a').css({'color':'white','font-weight': 'normal'});    
        $('.h_menu .search_input').css({'border-bottom':'3px solid white'});   
        $('.h_menu a').css({'color':''});     
      //비워놓으면 적용시켜놓은게 없어짐
          }); //메서드 체인 - 선택자가 같을 경우에 뒷부분 선택자를 생략. ;()도 삭제



    //page3 하버되면 텍스트 보임
          $(".vid_wrap,.vid_text").on('mouseover',function(){    //on() : 마우스에 관련된 메서드 //on(마우스 이벤트,실행구) 
            $('.vid_text').css({'display':'block'});    
        })
        
        $(".vid_wrap,.vid_text").on('mouseout',function(){    //on() : 마우스에 관련된 메서드 //on(마우스 이벤트,실행구) 
            $('.vid_text').css({'display':'none'});    
        })



});




            /*slider*/
            $.global = new Object();

            $.global.item = 1;
            $.global.total = 0;
            
            
            
            $(document).ready(function() 
                {
                var WindowWidth = $(window).width();
                var SlideCount = $('#slides li').length;
                var SlidesWidth = SlideCount * WindowWidth;
                
            $.global.item = 0;
                $.global.total = SlideCount; 
                
                $('.slide').css('width',WindowWidth+'px');
                $('#slides').css('width',SlidesWidth+'px');
            
            $("#slides li:nth-child(1)").addClass('alive');
                
            $('#left').click(function() { Slide('back'); }); 
            $('#right').click(function() { Slide('forward'); }); 
                    
            });
            
            function Slide(direction)
                {
            
                if (direction == 'back') { var $target = $.global.item - 1; }
                if (direction == 'forward') { var $target = $.global.item + 1; }  
                
                if ($target == -1) { DoIt($.global.total-1); } 
                else if ($target == $.global.total) { DoIt(0); }  
                else { DoIt($target); }
                
                
                }
            
            function DoIt(target)
            {
            
                var $windowwidth = $(window).width();
                var $margin = $windowwidth * target; 
                var $actualtarget = target+1;
                
                $("#slides li:nth-child("+$actualtarget+")").addClass('alive');
                
                $('#slides').css('transform','translate3d(-'+$margin+'px,0px,0px)');	
                
                $.global.item = target; 
                
            $('#count').html($.global.item+1);
                
            }

