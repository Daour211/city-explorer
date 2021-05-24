import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityData: ''

        }

    }
    getWeatherData = async () => {
        let serverRoute = process.env.REACT_APP_SERVER;
        // http://localhost:3001/test
        // const url = `${serverRoute}/test`;

        // http://localhost:3001/getPoke?pokeName=bulbasaur
        const url = `${serverRoute}/weather?city_name=${this.props.searchedCity}&lat=${this.props.lat}&lon=${this.props.lon}`;

        // console.log(url);
        const cityItem = await axios.get(url);
        console.log(cityItem.data);
        this.setState({
            cityData: cityItem.data
        })

        
    }

    // renderDateDescription() {
    //     this.renderDateDescription(this.getWeatherData());
    // }

    render() {
        return (
            <p>{this.state.cityData.description} {this.renderDateDescription}</p>

        )
    }

}

export default Weather;