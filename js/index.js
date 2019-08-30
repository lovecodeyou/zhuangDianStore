var timer2;
count2 = 1;
start2();


$(".middle>.right").click(function () {
    stop2();
    count2++;
    translateUl(count2);
    start2();
})

$(".middle>.left").click(function () {
    stop2();
    count2--;
    translateUl(count2);
    start2();
})


$(".display-box li").hover(function () {
    stop2();
}, function () {
    start2();
})




function start2() {
    timer2 = setInterval(function () {
        count2++;
        translateUl(count2);
    }, 2000);
}

function translateUl(number) {
    if (number == 8) {
        translateLeft(number);
        setTimeout(function () {
            $(".display-box>ul").css("transition", "none");
        }, 1000);
        setTimeout(function () {
            translateLeft(1);
        }, 1200);
        setTimeout(function () {
            $(".display-box>ul").css("transition", "left 1s");
        }, 1300);
        count2 = 1;
        return;
    }
    if (number == -2) {
        translateLeft(number);
        setTimeout(function () {
            $(".display-box>ul").css("transition", "none");
        }, 1000);
        setTimeout(function () {
            translateLeft(5);
        }, 1200);
        setTimeout(function () {
            $(".display-box>ul").css("transition", "left 1s");
        }, 1300);
        count2 = 5;
        return;
    }
    translateLeft(number);
}

function translateLeft(count) {
    var left = -372 * (count2 + 2) + "px";
    $(".display-box>ul").css("left", left);
}

function stop2() {
    clearInterval(timer2);
}