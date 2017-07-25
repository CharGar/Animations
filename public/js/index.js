$(function(){
console.log('hello');
  $('.codingResume, .extras, .techXp').hide()
  $('#resume').click(function(){
    $('.sectionOne').hide()
    $('.codingResume').show();
  })
  $('#home').click(function(){
    $('.sectionOne').show();
    $('.codingResume, .extras, .techXp').hide();
  })
  $('#resume').click(function(){
    $('.codingResume').show();
    $('.sectionOne, .extras, .techXp').hide();
  })
  $('#tech').click(function(){
    $('.techXp').show();
    $('.sectionOne, .extras, .codingResume').hide();
  })
  $('#extra').click(function(){
    $('.extras').show();
    $('.sectionOne, .techXp, .codingResume').hide();
  })
  $('.goodAt, #extra').on('click', function(){


    /*
    See https://www.greensock.com/splittext/ for details.
    This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
    */



    var quote = document.getElementById("quoted"),
    mySplitText = new SplitText(quote, {type:"words"}),
    tl = new TimelineMax({delay:0.5, repeat:0, repeatDelay:1}),
    numWords = mySplitText.words.length;

    //prep the quote div for 3D goodness
    TweenLite.set(quote, {transformPerspective:600, perspective:300, transformStyle:"preserve-3d", autoAlpha:1});


    //intro sequence
    for(var i = 0; i < numWords; i++){
      tl.from(mySplitText.words[i], 1.5, {z:randomNumber(-500,300), opacity:0, rotationY:randomNumber(-40, 40)}, Math.random()*1.5);
    }
    tl.from(quote, tl.duration(), {rotationY:360, transformOrigin:"50% 75% 200", ease:Power2.easeOut}, 0);

    //randomly change z of each word, map opacity to z depth and rotate quote on y axis
    for(var i = 0; i < numWords; i++){
      var z = randomNumber(-150,150)
      tl.to(mySplitText.words[i], 0.5, {z:z, opacity:rangeToPercent(z, -150, 150)}, "pulse");
    }
    tl.to(quote, 0.5, {rotationY:20}, "pulse");

    //randomly change z of each word, map opacity to z depth and rotate quote on xy axis
    for(var i = 0; i < numWords; i++){
      var z = randomNumber(-100,100)
      tl.to(mySplitText.words[i], 0.5, {z:z, opacity:rangeToPercent(z, -100, 100)}, "pulse2");
    }
    tl.to(quote, 0.5, {rotationX:-35, rotationY:0}, "pulse2");

    //reset the quote to normal position
    tl.to(mySplitText.words, 0.5, {z:0, opacity:1}, "reset")
    tl.to(quote, 0.5, {rotationY:0, rotationX:0}, "reset");

    //add explode label 2 seconds after reset animation is done
    tl.add("explode", "+=2")
    // //add explode effect
    // for(var i = 0; i < numWords; i++){
    //   tl.to(mySplitText.words[i], 0.6, {z:randomNumber(100, 500), opacity:0, rotation:randomNumber(360, 720), rotationX:randomNumber(-360, 360), rotationY:randomNumber(-360, 360)}, "explode+=" + Math.random()*0.2);
    // }


    // TRY THIS FOR SUPER-SLOW-MO
    tl.timeScale(1.2);



    //some helper functions
    function randomNumber(min, max){
      return Math.floor(Math.random() * (1 + max - min) + min);
    }

    function rangeToPercent(number, min, max){
      return ((number - min) / (max - min));
    }
  });

  /*
  * See https://www.greensock.com/gsap-js/ for details about GSAP.
  */
  //confetti dots animation start
  var master = new TimelineMax(),
  bg = $("#featureBackground"),
  slider = $("#ctrl_slider"),
  sliderValue = {value:0};


  slider.slider({
    range: false,
    min: 0,
    max: 100,
    step:.7,
    start:function() {
      master.pause();
    },
    slide: function ( event, ui ) {
      master.progress( ui.value / 1000 );
    },
    stop:function() {
      master.play();
    }
  });

  master.eventCallback("onUpdate", function() {
    sliderValue.value = master.progress() * 100;
    slider.slider(sliderValue);
  });
  master.add(control())
  function control() {
    var dots = new TimelineLite(),
    qty = 500,
    duration = 9.5,
    colors = ["blue","green","yellow","red", 'purple','pink', 'orange', 'aqua', 'teal'];

    for (i = 0; i < qty; i++) {
      dot = $("<div class='dot'/>").appendTo(bg)[0];
      var color = colors[(Math.random() * colors.length) | 0];
      TweenLite.set(dot, {backgroundColor:color, x:400, y:-1000});
      delay = Math.random() * duration;
      dots.to(dot, duration, {physics2D:{velocity:Math.random() * 1000 + 150, angle:Math.random() * 100 + 220, gravity:500}}, delay);
    }
    return dots;

  }//confetti dots animation end


  //start resume text animation

});
////////////////////////////////////
