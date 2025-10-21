"use client";
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";

export default function Home() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&region=NG`
      );
      const data = await res.json();
      setPopular(data.results || []);
    };
    fetchPopular();
  }, []);

  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Top Popular Movies in my Box</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {popular.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
