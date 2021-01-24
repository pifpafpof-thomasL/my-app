import React from 'react'


class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
      
    handleChange(e) {
      this.setState({ text: e.target.value });
      console.log("handleChange value, this.state", e.target.value, this.state)
    }
  
    handleSubmit(e) {
      e.preventDefault();  // pour ne pas recharger la page
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()   // fpr later use, <li> key to be unique
      };
      this.setState({
        items: this.state.items.concat(newItem),
        text: ''
      });
      // version asychrone se setState(), executée après la fin de handleSubmit():
      // this.setState(state => ({
      //   items: state.items.concat(newItem),
      //   text: ''
      // }));
      console.log("handleSubmit this.state", this.state)
    }
    //   {/* <TodoList items={this.state.items} /> */}

    render() {
      console.log("TodoApp this.state", this.state)

      return (
        <div>
          <h3>À faire</h3>
          <ul>
            {this.state.items.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Que faut-il faire ?
            </label>
            <input style={{marginLeft: '40px'}}
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Ajouter #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }

  }
  
  /*
  class TodoList extends React.Component {
    render() {

      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  */

  export default TodoApp