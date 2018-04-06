$('#search').click(function() {
    let query = $('#query').val()


    $('#result').load('search_series.html #result')

    console.log('query', query)
    $.ajax({
        url: `http://localhost:3000/show/search/series/${query}`,
        method: "GET",
        dataType: "JSON",
        success: function(result) {
            console.log('resule', result)
            result.forEach(series => {
                // console.log(series.show.image.medium)

                let image;
                if(series.show.image == null){
                    image = 'no images'
                } else {
                    image = `<img style="width:90px" src="${series.show.image.medium}"/>`
                }
                $('#result').append(`
                <tr>
                  <td>${image}</td>
                  <td>${series.show.name}</td>
                  <td>Series</td>
                  <td>${series.show.genres.join(', ')}</td>
                  <td>${series.show.rating.average}</td>
                  <td>${series.show.runtime} min</td>
                  <td>${series.show.summary}</td>
                  <td>
                    <a id="add" class="btn btn-sm btn-primary">+ Watchlist</a>
                  </td>
                </tr>
                `)
            });
        },
        error: function(err) {
          console.log('error', err.message);
          
        }
    })

    document.querySelector('#add').on('click', function() {
        $ajax({
            url: 'http://localhost:3000/addWatchList',

        })
    })

}) 