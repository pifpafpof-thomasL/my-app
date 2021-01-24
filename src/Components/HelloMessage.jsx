import React from 'react'

class HelloMessage extends React.Component {
    render() {  // afficher moi, se déclenche si changement de props, ou de state/état interne des data du composant
      const { famille, name} = this.props
      const len = famille ? famille.length : "(error props famille undefined)"
      // const famille = this.props.famille
      // const name = this.props.name
      const divStyle = {
        color: this.props.color,
        // color2: {
        //     info1: "ttiti",
        //     info23: "tata",
        // }
        //backgroundImage: 'url(' + imgUrl + ')',
        //fontFamily: "fantasy"  
      };
      return (  // return du JSX
        <div style={divStyle}>
          Salut {name} {famille} longueur {len}
        </div>
      );
    }
  }

  export default HelloMessage