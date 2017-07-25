
$('#resume').on('click', function(){

console.log('resume working');
var tl = new TimelineLite,
    mySplitText = new SplitText("#quote", {type:"words,chars"}),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

TweenLite.set("#quote", {perspective:400});

tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");



document.getElementById("animate").onclick = function() {
  tl.restart();
}
})








//Tech experience animations//
$('.eggs, #tech').on('click', function(){



var tl = new TimelineMax({onUpdate:updateSlider});

tl.to("#scramble1", 1.5, {scrambleText:{text:"Tech Experience", chars:"0123456789", revealDelay:0.01, tweenLength:false, ease:Linear.easeNone}})

.to("#scramble2", 1.5, {scrambleText:{text:"JavaScript", chars:"0123456789",  ease:Linear.easeNone}})

.to("#scramble3", 1.5, {scrambleText:{text:"AngularJS", chars:"0123456789", revealDelay:1, tweenLength:false, speed:0.4, ease:Linear.easeNone}})

.to("#scramble4", 1.5, {scrambleText:{text:"Node", chars:"upperCase",  speed:0.3, ease:Linear.easeNone}})

.to("#scramble5", 1.5, {scrambleText:{text:"CSS3", chars:"lowerCase", speed:0.3,  ease:Linear.easeNone}})

.to("#scramble6", 1.5, {scrambleText:{text:"PhotoShop", chars:"lowerCase", speed:0.3,  ease:Linear.easeNone}})

.to("#scramble7", 1.5, {scrambleText:{text:"ng-maps", chars:"lowerCase", speed:0.3,  ease:Linear.easeNone}})

.to("#scramble8", 1.5, {scrambleText:{text:"Heroku", chars:"lowerCase", speed:0.3,  ease:Linear.easeNone}})

.to("#scramble9", 1.5, {scrambleText:{text:"Passport", chars:"lowerCase", speed:0.3, newClass:"orange", ease:Linear.easeNone, revealDelay:0.5, tweenLength:false}})

.to("#scramble10", 1.5, {scrambleText:{text:"@KeyFrames", chars:"lowerCase", speed:0.3, newClass:"orange", ease:Linear.easeNone, revealDelay:0.5, tweenLength:false}})

.to("#scramble11", 1.5, {scrambleText:{text:"ImpressJS", chars:"lowerCase", speed:0.3, newClass:"orange", ease:Linear.easeNone, revealDelay:0.5, tweenLength:false}})

$("#scrambleSlider").slider({
  range: false,
  min: 0,
  max: 1,
  step:.001,
  slide: function ( event, ui ) {
    tl.progress( ui.value ).pause();
  },
  stop: function () {
    tl.play();
  }
});

function updateSlider() {
  $("#scrambleSlider").slider("value", tl.progress());
}
});
