import React from 'react';

class Movie extends React.Component {
    render() {

        return (
            <>
                <p> {this.props.original_title}  </p>
                <p>{this.props.overview}</p>
                <p> {this.props.vote_average}  </p>
                <p>{this.props.vote_count}</p>
                <img src={this.props.poster_path}/>
                <p>{this.props.popularity}</p>
                <p>{this.props.release_date}</p>
                
            </>

        )
    }
}

export default Movie;