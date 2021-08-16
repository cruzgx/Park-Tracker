import axios from "axios";
import Figure from 'react-bootstrap/Figure'

const Battery = (props) => {
    return(
        <div>
            <h1 className='text-center'>Battery Park</h1>
            <div className='text-center'>
                <Figure>
                    <Figure.Image
                        width={1350}
                        height={1000}
                        alt="171x180"
                        src="https://cdn.getyourguide.com/img/location/556ddd302d7c4.jpeg/88.jpg"
                    />
                <Figure.Caption>
                   A typical day at Battery Park during NYC's summer months
                </Figure.Caption>
                </Figure>             
            </div>
            <button onClick={getWeather}>Click me to get API info.</button>
        </div>
    )
}

const getWeather = () => {
    // fetch('https://api.airvisual.com/v2/nearest_city?lat=40.702772&lon=-74.015545&key=bcf058ea-9c3a-424e-a180-33ccd15e41cd')
    //     .then(responce => responce.json())
    //     .then(data => console.log(data))
    //     let weatherData = data.data;
    //     console.log(weatherData);
    //     console.log(weatherData.city)

    axios.get('https://api.airvisual.com/v2/nearest_city?lat=40.702772&lon=-74.015545&key=bcf058ea-9c3a-424e-a180-33ccd15e41cd')
        .then(responce => {
            console.log(responce)
            // console.log(typeof responce)
            let weatherData = responce.data.data;
            console.log(weatherData)
            console.log(typeof weatherData)
            console.log(weatherData.city)
        })


};


export default Battery;