import React, { Component } from 'react';
import Store from './components/menucomponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return(
        <div className="Appl">
        <nav>
          <div className="container">
            <div>
                <div id="font">
                  Learning react
                </div>
            </div>
          </div>
        </nav>
        <Store dishes = {this.state.dishes}/>
        </div>
      
    );
  }
}
export default App;
