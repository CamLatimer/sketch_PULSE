var circle = $('#circle-p');
var span = $('span');
circle.hover(function(){
  var status = 0;
  var iD;

  pulse();
}, function() {
  clearTimeout(iD);
  circle.css({top: 200, width: 100, height: 100, backgroundColor: 'rgba(220,15,0,0.2)', transition: '.2s'})
  span.css({top: '25%'})
})

function grow() {
  circle.css({top: 120, width: 300, height: 300, backgroundColor: 'grey', transition: '.2s'})
  span.css({top: '40%'})
  status = 1;

}

function shrink() {
  circle.css({top: 200, width: 100, height: 100, backgroundColor: 'rgba(220,15,0,0.2)', transition: '.2s'})
  span.css({top: '25%'})
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
  }, 230)
}
