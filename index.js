// Keep track of currently animating elements and their timeouts
let animationTimeouts = {};

function TriggerPopAnim($el, className, duration = 300) {
    const elementId = $el.index(); // Use element index as identifier
    
    // Clear any existing animation on this element
    $el.removeClass(className);
    clearTimeout(animationTimeouts[elementId]);
    
    // Force reflow
    void $el[0].offsetWidth;
    
    // Start new animation
    $el.addClass(className);
    
    // Store the timeout reference
    animationTimeouts[elementId] = setTimeout(() => {
        $el.removeClass(className);
        delete animationTimeouts[elementId];
    }, duration);
}

// Remove the incomplete handler
// $(".txt").on("hover") - DELETE THIS LINE

// Simplify by combining selectors
$(".txt, img").hover(function() {
    // Only trigger on hover for non-touch devices
    if (!('ontouchstart' in window)) {
        TriggerPopAnim($(this), "pop");
    }
});

$(".txt, img").click(function() {
    // Remove animation class from all elements first
    $(".txt, img").removeClass("pop");
    
    // Clear all existing timeouts
    Object.keys(animationTimeouts).forEach(key => {
        clearTimeout(animationTimeouts[key]);
        delete animationTimeouts[key];
    });
    
    // Then animate just the clicked element
    TriggerPopAnim($(this), "pop");
});
