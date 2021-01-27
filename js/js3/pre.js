$(function () {
    if($(window).width()<700){
var imageURLs=new Array(),errorTimer,imagesLoaded=0;
$('img').each(function() {
    imageURLs.push($(this).attr('src'));
});
onImageLoaded();
function preloadImages() {
    if (imageURLs && imageURLs.length && imageURLs[imagesLoaded]) {
        var img = new Image();
        img.src = imageURLs[imagesLoaded];
        setTimeout(function () {
            if (!img.complete) {
                $(img).bind('onreadystatechange load error', onImageLoaded);
            } else {
                onImageLoaded();
            }
            errorTimer = setTimeout(onImageLoaded,1000);
        },25);
    }
}
function onImageLoaded() {
    clearTimeout(errorTimer);
    var percent = parseInt(100 * imagesLoaded / (imageURLs.length));

    $('#loading span').text(percent+'%');

    if(percent == 100) $('#loading ').fadeOut(function(){
    });
    imagesLoaded++;
    preloadImages();
}
    }
})