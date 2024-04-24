import React from "react";

//?asynchronously load iss coordinates from open-notify api. After succesfull fetch deserialize data from into json (asynchronously) and return it
async function getCoords() {
  const coords = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
  const data = await coords.json();
  return data;
}

//?main component responsible for displaying ccoordinates
class Coords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0,
      timestamp: 0,
    };
  }
  //? after mounting invoke getCoords() [line 4] and set component state's elements accordingly
  componentDidMount() {
    getCoords().then((tmp) => {
      console.log(tmp);
      this.setState({
        longitude: tmp.longitude,
        latitude: tmp.latitude,
        timestamp: tmp.timestamp,
      });
    });
    //? creates interval in with getCoords() [line 4] will be invoked and it's returned value will be used for updating component's state
    //? interva is 100ms
    setInterval(() => {
      getCoords()
        .then((tmp) => {
          //console.log(tmp);
          if (!this.props.refresh) {
            this.setState({
              longitude: tmp.longitude,
              latitude: tmp.latitude,
              timestamp: tmp.timestamp,
            });
          }
        })
        .catch((err) => {
          //console.log(err);
        });
    }, 100);
  }

  //? basic react render function using string interpolation to render current coordinates
  render() {
    return (
      <div className="Coords tc">
        <p className="fw8 b--light-blue ba bw2 w-auto dib moon-gray">
          {" "}
          {`Coords ${this.state.latitude}, ${this.state.longitude}, ${this.state.timestamp}`}
        </p>
      </div>
    );
  }
}

export default Coords;
