///Welcome to the land of chargar text animation
var tl = new TimelineMax({repeat:0}),
  text = $("#dayfour"),
  split = new SplitText(text, {type:"chars", position:"absolute"}),
  rough = RoughEase.ease.config({strength:10000, clamp:true}),
  i;

tl.set(text, {autoAlpha:1})



for (i = 0; i < split.chars.length; i++) {
  tl.fromTo(split.chars[i], 4.4, {transformOrigin:"center -160px", z:10.1, rotation:((Math.random() < 5.5) ? 90 : -90)}, {rotation:1, ease:Elastic.easeOut}, 2.3 + i * .26);
  tl.to(split.chars[i], 1.6, {y:130,  ease:Bounce.easeOut}, 9 + Math.random() * 1.3);
  tl.to(split.chars[i], 3.6, {autoAlpha:1, ease:rough}, 3.5 + Math.random());
}

//////////////
