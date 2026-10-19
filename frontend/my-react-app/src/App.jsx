const App = () => {
  const movies = [
    { id: 1, title: 'Inception', year: 2010, rating: 8.8 },
    { id: 2, title: 'Interstellar', year: 2014, rating: 8.6 },
    { id: 3, title: 'The Dark Knight', year: 2008, rating: 9.0 },
    { id: 4, title: 'Avatar', year: 2009, rating: 7.8 },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-black via-blue-950 to-purple-950/40 text-white flex flex-col items-center justify-center p-6">
      <div className="pattern w-full max-w-4xl">
        <div className="wrapper w-full">
          
          {/* Centered Header Section */}
          <header className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Find <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-orange-500 to-red-500">Movies</span> You'll Enjoy
            </h1>

            {/* Centered Search Bar Container */}
            <div className="w-full max-w-xl mx-auto">
              <div className="relative w-full">
                
                {/* Emoji Icon Positioned Inside the Input */}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg select-none pointer-events-none">
                  🔍
                </span>

                {/* Search Input */}
                <input 
                  type="text"
                  placeholder="Search through thousands of movies..."
                  className="w-full bg-slate-900/80 border border-slate-700/60 rounded-full py-4 px-6 pl-12 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all shadow-xl backdrop-blur-md"
                />

              </div>
            </div>
          </header>

          {/* Movie Grid Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-200">Trending Movies</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.map((movie) => (
                <div 
                  key={movie.id} 
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:scale-102 transition-transform duration-300 backdrop-blur-sm"
                >
                  {/* Poster Placeholder Area */}
                  <div className="h-72 bg-slate-800/80 flex items-center justify-center text-slate-500 font-medium">
                    Movie Poster
                  </div>

                  {/* Movie Details */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-white truncate">{movie.title}</h3>
                    <div className="flex justify-between items-center text-sm text-slate-400">
                      <span>⭐ {movie.rating}</span>
                      <span>{movie.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

export default App;