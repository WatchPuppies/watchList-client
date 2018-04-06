$('#search').click(function() {
    let query = $('#query').val()

    $('#result').load('category.html #result')

    $.ajax({
        url: `localhost:3000/show/search/series/${query}`,
        method: "GET",
        dataType: "JSON",
        success: function(result) {
            result.forEach(series => {
                $('#series').append(`
                <tr>
                  <td>${series.name}</td>
                  <td>series</td>
                  <td>${series.type}</td>
                  <td>${series.rating}</td>
                  <td>${series.runtime}</td>
                  <td>${series.summary}</td>
                  <td>
                    <a class="btn btn-sm btn-primary" href="#">Add Playlist</a>
                  </td>
                </tr>
                `)
            });
        }
    })

})