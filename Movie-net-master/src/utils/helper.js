const key1 = '811b7b4b8f9d4d52fc505c88d01655f9';
const key2 = '35586a6cfc8da724be9d55ef8ad2426f';

const genre_ids = [28, 12, 16, 35, 27, 53];
const genre_ids2 = [10759 , 16,   10763, 35 , 18 , 10762] ; 
const genre = ['Action', 'Adventure', 'Animation', 'Comedy', 'Horror', 'Thriller'];
const genre2 = ['Action' , 'Animation' , 'News' , 'Comedy' , 'Drama' , 'Kids'] ; 

export async function fetchAllMovies() {
    let obj = {
        Action: [],
        Adventure: [],
        Animation: [],
        Comedy: [],
        Horror: [],
        Thriller: [],
    };
    let obj2 = {
        Action : [] , 
        Animation : [] ,  
        News : [] , 
        Comedy : [] , 
        Drama : [] , 
        Kids : [] , 
    } ; 


    for(let i=0;i<genre_ids.length;i++){
        try {
            const data = await fetch(`https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&api_key=${key1}&language=en-US&with_genres=${genre_ids[i]}&language=en-US`)
            const result = await data.json() ; 
            obj[genre[i]] = result.results.slice(0 , 10) ; 
        } catch (error) {
            console.log("Cannot fetch all movies for genre ", i);
        }
    }

    for(let i=0;i<genre_ids2.length;i++){
        try {
            const data = await fetch(`https://api.themoviedb.org/3/discover/tv?page=1&sort_by=popularity.desc&api_key=${key2}&language=en-US&with_genres=${genre_ids2[i]}&language=en-US`)
            const result = await data.json() ; 
            obj2[genre2[i]] = result.results.slice(0 , 10) ; 
        } catch (error) {
            console.log("Cannot fetch all movies for genre ", i);
        }
    }

    // console.log(obj ) ; 
    // console.log(obj2 ) ; 
    
    return {obj , obj2} ; 
    
    
}

