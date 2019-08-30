 $(function () {



     var timer;
     var count = 0;
     var b = $("#images img");
     start();



     $("nav").hover(function () {
         clearInterval(timer);
     }, function () {
         start();
     });



     $("nav ol li").click(function () {
         clearInterval(timer);
         count = $(this).index()
         changeOpacity(count);
         spotBright(count);
         start();
     });


     function start() {
         timer = setInterval(function () {
             count++
             if (count == 3) {
                 count = 0;
             }
             spotBright(count);
             changeOpacity(count);
         }, 2000)
     }

     function spotBright(count) {
         $("nav ol li").eq(count).css("background", "red");
         $("nav ol li").eq(count).siblings().css("background", "black");
     }

     function changeOpacity(count) {
         var a = b.eq(count);
         a.css("opacity", "1");
         for (var i = 0; i < b.length; i++) {
             if (i == count)
                 continue;
             b.eq(i).css("opacity", "0");
         }
     }



 })