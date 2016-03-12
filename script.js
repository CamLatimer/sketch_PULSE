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

function pulse() {

  iD = setInterval(function() {
    if (status == 0) {
      grow()
    } else if (status == 1) {
      shrink()
    }
  }, 300)
}
