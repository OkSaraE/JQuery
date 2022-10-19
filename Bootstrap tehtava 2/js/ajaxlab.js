$('#seaForm').submit(function (event) {

  $('article').remove();

  event.preventDefault();

  const address = $(this).attr('action');
  const searchTerm = $(this).serialize();
  const url = address + '?' + searchTerm;

  $.getJSON(url, function (shows) {
    console.log(shows);

    $.each(shows, function (i, show) {
      const name = show.show.name;
      const site = show.show.officialSite || show.show.url;
      const genres = show.show.genres;
      const description = show.show.summary;
      const image = show.show.image?.medium || "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
      $('#result').append(`
      <div class="col">
      <div class="card border-dark mb-3" style="width: 20rem;">
        <img src="${image}" alt="cover image for ${name}" class="card-img-top"> </img>
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text">Genres: ${genres.join(' | ')}</p>
          </div>
            <div class="card-footer">
            <a href="${site}" class="card-link">Homepage</a>
            </div>
        </div>
      </div>`);
    });
  });
});