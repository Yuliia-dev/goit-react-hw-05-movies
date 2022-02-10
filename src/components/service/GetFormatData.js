export function FormatMovie(movie) {
  if (movie) {
    return movie.map(res => ({
      id: res.id,
      title: res.title,
      poster_path: res.poster_path
        ? `https://image.tmdb.org/t/p/w300/${res.poster_path}`
        : 'https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png',
    }));
  }
}

export function FormatCast(actors) {
  if (actors) {
    return actors.map(res => ({
      id: res.id,
      name: res.name,
      profile_path: res.profile_path
        ? `https://image.tmdb.org/t/p/w300/${res.profile_path}`
        : 'https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png',
      character: res.character,
    }));
  }
}

export function FormatMovieDetailsPage({
  id,
  title,
  poster_path,
  vote_average,
  overview,
  genres,
}) {
  const movie = {
    id: id,
    title: title,
    poster_path: poster_path
      ? `https://image.tmdb.org/t/p/w300/${poster_path}`
      : 'https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png',
    vote_average: vote_average,
    overview: overview,
    genres: genres,
  };
  return movie;
}
