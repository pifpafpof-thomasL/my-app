import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: true,
        nbClicks: 0
      };
  
      // Cette liaison est nécéssaire afin de permettre
      // l'utilisation de `this` dans la fonction de rappel.
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        // isToggleOn: !state.isToggleOn
        isToggleOn: state.isToggleOn ? false : true,
        nbClicks: state.nbClicks + 1
      }));
    }
  
    render() {
      return (
        <>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}  
          </button>
          <div style={{marginLeft: "5px"}} >Clicks: {this.state.nbClicks} </div>
        </>
      );
    }
  }

  export default Toggle