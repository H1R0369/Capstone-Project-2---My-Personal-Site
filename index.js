$(".txt").hide().slideUp().slideDown();
$("img").hide().slideUp().slideDown();

function TriggerPopAnim($el, className, duration = 240) {
    $el.removeClass(className);
    void $el[0].offsetWidth;
    $el.addClass(className);
    setTimeout(() => $el.removeClass(className), duration);
}

$(".txt").click(function () {
    TriggerPopAnim($(this), "pop");
});

$("img").click(function () {
    TriggerPopAnim($(this), "pop");
});
  
