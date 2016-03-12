var circle = $('#circle-p'); // select cirlce
var iD;
var status = 0;

circle.hover(function(){
  pulse();

}, function() {
  clearTimeout(iD);
  circle.css({
    width: 100,
    height: 100,
  })
})

function grow() {
  circle.css({
    width: 300,
    height: 300,
    transition: '.2s'
  })
  status = 1;
}

function shrink() {
  circle.css({
    width: 100,
    height: 100,
    transition: '.2s'
  })
  status = 0;
}

function pulse() {
    if (status == 0) {
      grow()
    } else if (status == 1) {
      shrink()
    }
  iD = setTimeout(function() {
    pulse();
  }, 200)
}
