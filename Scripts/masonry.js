window.onload = function(){
  //call masonry
  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
  });
  createBar();
}

