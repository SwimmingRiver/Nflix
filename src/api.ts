const API_KEY = "74f93e7781dc08e6c879b7393a26a388";
const BASE_PATH ="https://api.themoviedb.org/3";

interface IMovie{
    id:number;
    backdrop_path:string;
    poster_path:string;
    title:string;
    overview:string;
}



export interface IGetMoviesResult{
    date:{
        maximum:string;
        minimum:string;
    };
    page:number;
    results:IMovie[];
    total_pages:number;
    total_resuklts:number;
}

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
      (response) => response.json()
    );
  }