import React from 'react'


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0,
      paire: -1,
      choixInput: -1,
    };
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1,
      paire: this.state.seconds %2 === 0  ? true : false ,
    });
    // this.setState((state,props) => ({
    //   seconds: state.seconds + 1,
    //   paire: state.seconds %2 === 0  ? true : false ,
    // }));
  }

  componentDidMount() {  // render first time done   // mount Vue Js // fetch
   console.log("<Timer> componentDidMount")
   this.interval = setInterval(() => this.tick(), 1000 + Number(this.props.delay ? this.props.delay: 0));
  }

  componentWillUnmount() {
    console.log("<Timer> componentWillUnmount")
    clearInterval(this.interval);
  }

  render() {  // décelnche si changement de props ou de state
    //console.log("render this.state", this.state)
    
    return (
      <div>
        Secondes : {this.state.seconds}, delay: {this.props.delay}
      </div>
    );
  }
}
  export default Timer