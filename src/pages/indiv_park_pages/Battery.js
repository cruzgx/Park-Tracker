import axios from "axios";

const Battery = (props) => {
    return(
        <div>

            <h1>Battery Park</h1>

            <button onClick={getWeather}>Click me to get API info.</button>
            


        </div>
    )
}

const getWeather = () => {
    // fetch('https://api.airvisual.com/v2/nearest_city?lat=40.702772&lon=-74.015545&key=bcf058ea-9c3a-424e-a180-33ccd15e41cd')
    //     .then(responce => responce.json())
    //     .then(data => console.log(data));

    axios.get('https://api.airvisual.com/v2/nearest_city?lat=40.702772&lon=-74.015545&key=bcf058ea-9c3a-424e-a180-33ccd15e41cd')
        .then(responce => {
            let weatherData = responce.data;
            console.log(weatherData)
        })


};


export default Battery;