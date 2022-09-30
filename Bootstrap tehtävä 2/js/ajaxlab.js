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
      <article>
        <div>Name: ${name}</div> <br>
        <a href="${site}">Link to show</a> <br>
        <div>Genres: ${genres.join(' | ')}</div>
        <div>Description: ${description}</div> <br>
        <img src="${image}" alt="cover image for ${name}"> <br><br>
      </article>`);
    });
  });

});