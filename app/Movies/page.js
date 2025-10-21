"use client";
import { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard";


export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      const data = await res.json();
      setMovies(data.results || []);
    };
    fetchMovies();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <section className="relative z-10 p-10">
        <h1 className="text-4xl mb-6 font-bold">Upcoming Movies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
