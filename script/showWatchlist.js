$.ajax({
  url: 'http://localhost:3000/home',
  method: 'GET',
  dataType: 'JSON',
  success: function(result) {
    console.log('HERE', result);

    result.data.forEach(data => {

      $('#watchlist').append(`
        <tr>
          <td><img style="width:100px;" src="http://image.tmdb.org/t/p/w185/${data.poster}"></td>
          <td>${data.title}</td>
          <td>${data.category}</td>
          <td>${data.description}</td>
          <td>Not Watched</td>
          <td>
            <button id="delete-watchlist-${data._id}" class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      `)

      $(`#delete-watchlist-${data._id}`).click(function() {
        
        axios.post('http://localhost:3000/user/delete-show',
          obj = {
            showId: data._id
          }
        )
        .then(function(response) {
          console.log('delete response');
          window.location.href = `home.html`
        })
        .catch(function(error) {
          console.log('error response', error.message);
        })
      })
    })

  },
  error: function(error) {
    console.log(error);
    
  }
})