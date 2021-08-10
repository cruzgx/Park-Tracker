
const WeatherComp = (props) => {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://www.nycgo.com/images/neighborhoods/27/battery-park-malcolm-brown-29__large.jpg" />
                <Card.Body>
                  <Card.Title>Weather</Card.Title>
                  <Card.Text>
                    A park located at the most bottom part of Manhattan.
                    Enjoy views of the water and the Statue of Liberty
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
        </div>
    )
}

export default WeatherComp;