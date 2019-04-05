import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';

import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import {paginate} from '../util/paginate';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
       // selectedGenre: getGenres()
       sortColumn: {order:'asc', path: 'title'}
        
        
     }

     componentDidMount() {

        const genres= [{ _id:"", name: 'All Genres'}, ...getGenres()]
        this.setState({movies: getMovies(), genres});
     }
    
    
        handleSort = path => {
            const sortColumn = {...this.state.sortColumn};

            if(sortColumn.path===path){
                sortColumn.order=(sortColumn.order==='asc')?'desc':'asc';
            }else{
                sortColumn.path=path;
                sortColumn.order='asc';
            }
            this.setState({sortColumn});
        }
     handleGenreSelect = (genre) => {
         this.setState({selectedGenre: genre, currentPage: 1});
     } 
     


     handleLike = (movie) => {
         const movies=[...this.state.movies];
         const index=movies.indexOf(movie);
         movies[index].liked=!movies[index].liked;
         this.setState({movies:movies});


     }

     handlePageChange = page => {
         this.setState({currentPage:page});
     }

     


     handleDelete = (movie)=>{
         const movies = this.state.movies.filter( m => m._id != movie._id);
         this.setState({movies: movies});

     }

     
    render() { 
        const{currentPage, pageSize, movies: allMovies, selectedGenre} = this.state;
        if(this.state.movies.length===0) return <p> There is no data to display right now</p>
        
        
        const filtered = selectedGenre && selectedGenre._id  ? allMovies.filter(m => m.genre._id === selectedGenre._id) :allMovies;
        
        const sorted = _.orderBy(filtered, [this.state.sortColumn.path], [this.state.sortColumn.order]);
        const movies = paginate(sorted,pageSize,currentPage);
        return (  
          
           <div className="row">
                <div className="col-2">
                    <ListGroup items={this.state.genres} 
                            onItemSelect={this.handleGenreSelect}
                            selectedItem = {this.state.selectedGenre}
                            reset = {this.handlereset}
                        />
                </div>
                <div className="col">
                {/* <p>Showing {this.state.movies.length} movies from the database</p>  */}
                <p> Showing {filtered.length} movies in the database</p>
                <MoviesTable onLike = {this.handleLike}
                onDelete={this.handleDelete}
                movies={movies}
                onSort={this.handleSort}/>
          
          <Pagination itemsCount = {filtered.length} 
          pageSize={this.state.pageSize} 
          onPageChange={this.handlePageChange}
          currentPage = {this.state.currentPage}/>

                </div>
                

          </div>
        );
    }
}
 
export default Movies;