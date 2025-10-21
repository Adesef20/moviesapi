"use client";
import { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard";

export default function Trending() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      const data = await res.json();
      setTrending(data.results || []);
    };
    fetchTrending();
  }, []);

  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">🔥 Trending Movies This Week</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {trending.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
