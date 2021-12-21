import React from "react";

async function getCoords() {
  const coords = await fetch("http://api.open-notify.org/iss-now.json");
  const data = await coords.json();
  return data;
}

class Coords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0,
    };
  }

  componentDidMount() {
    getCoords().then((tmp) => {
      console.log(tmp);
      this.setState({
        longitude: tmp.iss_position.longitude,
        latitude: tmp.iss_position.latitude,
      });
    });
    setInterval(() => {
      getCoords()
        .then((tmp) => {
          //console.log(tmp);
          if (!this.props.refresh) {
            this.setState({
              longitude: tmp.iss_position.longitude,
              latitude: tmp.iss_position.latitude,
            });
          }
        })
        .catch((err) => {
          //console.log(err);
        });
    }, 100);
  }

  render() {
    return (
      <div className="Coords tc">
        <p className="fw8 b--light-blue ba bw2 w-auto dib moon-gray">
          {" "}
          {`Coords ${this.state.latitude}, ${this.state.longitude} `}
        </p>
      </div>
    );
  }
}

export default Coords;
