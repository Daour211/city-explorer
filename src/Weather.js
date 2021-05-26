import React from 'react';
// import axios from 'axios';

class Weather extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         cityData: ''

    //     }

    // }
    // getWeatherData = async () => {
    //     let serverRoute = process.env.REACT_APP_SERVER;
    //     // http://localhost:3001/test
    //     // const url = `${serverRoute}/test`;

    //     // http://localhost:3001/getPoke?pokeName=bulbasaur
    //     const url = `${serverRoute}/weather?city_name=${this.props.searchedCity}&lat=${this.props.lat}&lon=${this.props.lon}`;

    //     // console.log(url);
    //     const cityItem = await axios.get(url);
    //     console.log(cityItem.data);
    //     this.setState({
    //         cityData: cityItem.data
    //     })


    // }



    // renderDateDescription() {
    //     this.renderDateDescription(this.getWeatherData());
    // }

    render() {
        // this.props.hornedData.map((item, idx) => {

        //             return (
        //                 <HornedBeast
        //                     key={idx}
        //                     title={item.title}
        //                     imgsrc={item.image_url}
        //                     description={item.description}
        //                     renderingSelectedAnimal={this.props.renderingSelectedAnimal}

        return (
            // <>
            //     {this.props.cityData.map((item, idx) => {
            //         return (
            //             <>
            //                 <div key={idx}>
            //                     <p>
            //                         date={item.date}
            //                     </p>
            //                     <p>

            //                         description={item.description}
            //                     </p>
            //                 </div>


            //             </>
            //         )
            //     })
            //     }
            // </>

            <>

                <p> {this.props.date}  </p>
                <p>{this.props.description}</p>
            </>
        )
    }

}

export default Weather;