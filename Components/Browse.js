
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse(){

    //fetch the movies and updating the store
    useNowPlayingMovies();
    usePopularMovies();   
    useTrendingMovies();
    useUpcomingMovies();
    return (
        <div>
            <Header />
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
            {/* 
            MainContainer
                - VideoBackground
                - VideoTitle
            SecondaryContainer
                - Movie list
            
            */}
        </div>
    )
}

export default Browse;
