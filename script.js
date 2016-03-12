// var circle = $('#circle-p'); // select cirlce
// var iD;
// var status = 0;
// circle.hover(function(){
//   iD = setInterval(function() {
//     pulse();
//   },100)
// }, function() {
//   clearInterval(iD)
// })
// function grow() {
//   circle.css({
//     width: 100,
//     height: 100,
//     transition: '.2s'
//   })
//   status = 1;
//   console.log('grew')
// }
// function shrink() {
//   circle.css({
//     width: 200,
//     height: 200,
//     transition: '.2s'
//   })
//   status = 0;
//   console.log('shrunk')
// }
// function pulse() {
//   if (status == 0) {
//     grow()
//   } else if (status == 1) {
//     shrink()
//   }
//
// }

var circle = $('#circle-p'); // select cirlce
var iD;
var status = 1;
circle.hover(function(){
  pulse();

}, function() {
  clearInterval(iD)
  circle.css({
    width: 100,
    height: 100,
    transition: '1s'
  })
})
function pulse() {
  grow()
  iD = setInterval(function() {
    if (status == 0) {
      grow()
    } else if (status == 1) {
      shrink()
    }
  }, 300)
}

function grow() {
  circle.css({
    width: 300,
    height: 300,
    transition: '.1s'
  })
  status = 1;
}
function shrink() {
  circle.css({
    width: 100,
    height: 100,
    transition: '.3s'
  })
  status = 0;
}
