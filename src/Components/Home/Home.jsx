import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'

const api_Key = "65c3879c276c3f27e9932381965958df"
const url = "http://api.themoviedb.org/3"
const upcoming = "upcoming"
const imgUrl = "https://image.tmdb.org/t/p/original"
const nowPlay = "now_playing"
const popular = "popular"
const Top_rated = "top_rated"

const Card = ({img})=>(

  <img className='card' src = {img}  alt="cover"/>
)
const Row = ({title,arr =[{
     cover : "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg",
}]})=>(

  <div className='row'>
   <h2>{title}</h2>

    <div>
      {
        arr.map((item,index)=>(         
          <Card key={index} img = {`${imgUrl}/${item.poster_path}`}/>
        ))
      }
   
   </div>

  </div>
)



const Home = () => {

  const[upcomingMovies,setupcomingMovies] = useState([]);  
  const[popularMovies,setpopularMovies] = useState([]);  
  const[NowMovies,setNowMovies] = useState([]);  
  const[topratedMovies,settopratedingMovies] = useState([]);  

  useEffect(()=>{
      
   const fetchUpcoming = async()=>{
      const {data : {results}} =  await axios.get(`${url}/movie/${upcoming}?api_key=${api_Key}&page=2`);
      setupcomingMovies(results);
   }

   const Popular = async()=>{
    const {data : {results}} =  await axios.get(`${url}/movie/${popular}?api_key=${api_Key}`);
    setpopularMovies(results);
 }

 const Nowplaying = async()=>{
  const {data : {results}} =  await axios.get(`${url}/movie/${nowPlay}?api_key=${api_Key}`);
  setNowMovies(results);
}

const toprated = async()=>{
  const {data : {results}} =  await axios.get(`${url}/movie/${Top_rated}?api_key=${api_Key}`);
  settopratedingMovies(results);
}

     fetchUpcoming();
     Popular();
     Nowplaying();
     toprated();
  },[])




  return (
    <section className='home'>
    <div className='banner' style={{
      backgroundImage : popularMovies[5] ? `url(${`${imgUrl}/${popularMovies[5].poster_path}`})` : "rgb(16, 16,16)"
    }}>
    </div>

      <Row title={"UpComing"} arr={upcomingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Trending"} arr={NowMovies} />
      <Row title={"Top Rated"} arr={topratedMovies} />
      


    </section>
  )
}

export default Home
// 00455c12b832e6eab741e78a4fe80528
// http://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1
