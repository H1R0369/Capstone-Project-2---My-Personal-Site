$(".txt").hide().slideUp().slideDown();
$("img").hide().slideUp().slideDown();

$(".txt").on("hover")

$(".txt").hover(function () {
    $(this).addClass("pop");
    setTimeout(() => $(this).removeClass("pop"), 300);
});

$(".txt").click(function () {
    $(this).addClass("pop");
    setTimeout(() => $(this).removeClass("pop"), 300);
});

$("img").hover(function () {
    $(this).addClass("pop");
    setTimeout(() => $(this).removeClass("pop"), 300);
});

$("img").click(function () {
    $(this).addClass("pop");
    setTimeout(() => $(this).removeClass("pop"), 300);
});
  
