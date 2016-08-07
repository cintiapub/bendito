var isInitialized = false;
$('#flavors a').one('click', function(e) {
    if (!isInitialized) {
        setTimeout(function() {
            $('#blueimp-gallery .slides img').click();
            isInitialized = true;
        }, 500);
    }
});