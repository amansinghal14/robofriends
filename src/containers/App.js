import React from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      robots: [],
      searchField: ''
    };
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });

    if(!this.state.robots.length) {
      return <h1>Loading...</h1>
    } else {
        return (
          <div>
            <h1>RoboFriends</h1>
            <SearchBox onSearchChange={this.onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        );
    }
  }
}

export default App;