import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "ramzi neili",
        bio: " Student.",
        imgSrc: "https://gomycodelearndev.blob.core.windows.net/profiles/a3432795-a0f4-4b75-8d82-04c9d8d9bff4-133195602473459236.jpg",
        profession: "Web Developer"
      },
      shows: false,
      intervalId: null,
      timeSinceMounted: 0,


    };
  }
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ timeSinceMounted: this.state.timeSinceMounted + 1 });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    const { shows } = this.state;
    const {timeSinceMounted } = this.state;
     return (
      <div>
        {shows && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h1>{fullName}</h1>
            <p>{profession}</p>
            <p>{bio}</p>
          </div>

        )}
        <p>Time since mounted: {timeSinceMounted}s</p>

        <button onClick={() => this.setState({ shows: !shows })}>
          {shows ? "Hide" : "Show"}
        </button>

      </div>

    );
  }
}

export default App;

