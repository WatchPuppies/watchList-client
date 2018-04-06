$('#add-to-watchlist').click(function(){
  let obj = {
    user: user,
    show: show
  }

  console.log('clicked');
  

  $.ajax({
    url:'http://localhost:3000/user/add-show',
    method: 'POST',
    dataType: 'JSON',
    data: obj,
    success: function(data) {
      $(document).ajaxSuccess(function(){
        alert("Add to Watchlist Success!");
      });
    },
    error: function(error) {
      $(document).ajaxSuccess(function(){
        alert("Add to Watchlist Failed!");
      });
    }
  })
})