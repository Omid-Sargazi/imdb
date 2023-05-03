import React from 'react'
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';
async function getMovie(movieId){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    return await res.json();
    
}

const MoviePage = async ({params}) => {
  
    const movieId = params.id

   const movie = await getMovie(movieId)
   const urls = `https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`

  return (
    <div className='w-full '>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center justify-center content-center max-w-6xl mx-auto md:space-x-6'>
      <Image style={{maxWidth:"100%",height:"100%"}} placeholder='blur' blurDataURL='/spinner.svg' className='rounded-lg ' src={movie} alt='movie poster' width={500} height={450}></Image>
      <div className='p-2'>
        <h2 className='text-l mb-3 font-bold'>{movie.title|| movie.name}</h2>
        <p className='text-l mb-3'><span className='font-semibold mr-1'>Oveview:</span> {movie.overview}</p>
       <p className='mb-3 '><span className='font-semibold mr-1'>Date Released: </span>{movie.release_date}</p>
       <p className='mb-3 '><span className='font-semibold mr-1'>Rating : </span>{movie.vote_count}</p>
      
      </div>
      </div>
    </div>
  )
}

export default MoviePage
