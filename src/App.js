import React from 'react';
import axios from 'axios';

import './App.css';
import Weather from './Weather';
// import dotenv from './dotenv';
// require('dotenv').config();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchedCity: '',
      chosenCity: '',
      displayMap: false,
      errorMessage: false,
      cityData: []
    }
  }

  updateCityName = (event) => {
    this.setState({
      searchedCity: event.target.value
    })
    console.log(this.state.searchedCity);

  }
  
 
  
  updateLocation = async (event) => {
    event.preventDefault();

    let locationURL = `https://eu1.locationiq.com/v1/search.php?key=pk.c2cc49511f7e125dfbd3bdab371cb62a&q=${this.state.searchedCity}&format=json`;


    try {
      let cityData = await axios.get(locationURL)

      this.setState({
        chosenCity: cityData.data[0],
        displayMap: true,


      })
      console.log(this.state.chosenCity);

    }
    catch {
      this.setState({
        displayMap: false,
        errorMessage: true,
      })

    }
    this.getWeatherData();

  }

  getWeatherData = async () => {
    let serverRoute = process.env.REACT_APP_SERVER;
        
    const url = `${serverRoute}/weather?city_name=${this.state.searchedCity}`;

    // console.log(url);
    const cityItem = await axios.get(url);
    console.log(cityItem.data);
    this.setState({
      cityData: cityItem.data
    })


  }



  render() {
    return (
      <>
        <h1>City Explorer</h1>

        <form onSubmit={this.updateLocation}>

          <input type='text' placeholder='Enter a city name' onChange={this.updateCityName} />
          <input type='submit' value='Get Location' />

          {/* <button onClick={this.updateCityName} /> */}
        </form>

        <h3>{this.state.chosenCity.display_name}</h3>

        <p>{this.state.chosenCity.lon}</p>

        <p>{this.state.chosenCity.lat}</p>

        { this.state.displayMap &&

          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.c2cc49511f7e125dfbd3bdab371cb62a&center=${this.state.chosenCity.lat},${this.state.chosenCity.lon}`} alt='' />
        }


        {this.state.errorMessage &&
          <p>error in receving the data</p>
        }

        {this.state.cityData.map((item, idx) => {
          return (
            <Weather
              key={idx}
              date={item.date}
              description={item.description}

            />
          )
        })
        }

        {/* <Weather cityData={this.state.cityData}/> */}



       </>
    );
  }
}

export default App;
