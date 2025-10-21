"use client";
import Image from "next/image";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">  
    <div className="relative w-full h-64">
             <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
            
            style={{ objectFit: "cover"}}
            width={500}
            height={750}
            className="w-full"
        />
      </div> 
    
     
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold truncate">{movie.title || movie.name}</h2>
        <p className="text-gray-300 text-base mt-1">
          🌟{movie.overview}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Rating: {movie.vote_average?.toFixed(1)} | {movie.release_date?.slice(0, 4)}
        </span>
        </div>
    </div>
  );
}