export async function fetchMovies(category = "popular") {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}
