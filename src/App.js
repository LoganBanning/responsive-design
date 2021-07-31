import NavBar from './components/NavBar'
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      navLinks: ['SERVICES', 'PORTFOLIO', 'ABOUT', 'TEAM', 'CONTACT'],
      isMenuOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render(){
    const { isMenuOpen, navLinks } = this.state;
    return (
      <div className='App'>
        <NavBar
          isMenuOpen={isMenuOpen}
          toggleMenu={this.toggleMenu}
          links={navLinks} 
          />
          <Header />
      </div>
    );  
  }
}


export default App;
