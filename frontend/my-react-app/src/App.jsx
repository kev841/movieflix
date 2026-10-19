import { useState, useEffect } from 'react';

const API_KEY = '16b55cf3d22d2f6aa600e90347950746';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const endpoint = searchTerm 
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}` 
          : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        
        const response = await fetch(endpoint);
        const data = await response.json();
        setMovies(data.results || []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setIsLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-linear-to-br from-black via-blue-950 to-purple-950/40 text-white flex flex-col items-center justify-center p-6">
      <div className="pattern w-full max-w-4xl">
        <div className="wrapper w-full">
          
          {/* Header & Search Bar */}
          <header className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Find <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-orange-500 to-red-500">Movies</span> You'll Enjoy
            </h1>

            <div className="w-full max-w-xl mx-auto">
              <div className="relative w-full">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg select-none pointer-events-none">
                  🔍
                </span>
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search through thousands of movies..."
                  className="w-full bg-slate-900/80 border border-slate-700/60 rounded-full py-4 px-6 pl-12 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all shadow-xl backdrop-blur-md"
                />
              </div>
            </div>
          </header>

          {/* Movie Grid Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-200">
              {searchTerm ? `Search Results for "${searchTerm}"` : "Trending Movies"}
            </h2>
            
            {isLoading ? (
              <p className="text-center text-slate-400 py-10">Loading movies...</p>
            ) : movies.length === 0 ? (
              <p className="text-center text-slate-400 py-10">No movies found. Try another search!</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                  <div 
                    key={movie.id} 
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:scale-102 transition-transform duration-300 backdrop-blur-sm"
                  >
                    {/* Movie Poster Image */}
                    <div className="h-72 bg-slate-800/80 overflow-hidden flex items-center justify-center">
                      {movie.poster_path ? (
                        <img 
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                          alt={movie.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-slate-500 text-sm">No Poster Available</span>
                      )}
                    </div>

                    {/* Movie Details */}
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 text-white truncate">{movie.title}</h3>
                      <div className="flex justify-between items-center text-sm text-slate-400">
                        <span>⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</span>
                        <span>{movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

        </div>
      </div>
    </main>
  );
}

export default App;