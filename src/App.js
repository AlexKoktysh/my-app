import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import store from './Redux/redux';
import Item from './Component/Item/Item';

const App = (props) => {
  return (
    <div className="App">
        <Navbar className='navbar' />
        <div className='header'>Header</div>
        <div className='profile'>Profile</div>
        <div className='app-wrapper-content'>
          <Route path='/item' component={Item} />
        </div>
      </div>
  )
}

{/* <Route path='/profile/:userId?' 
render={() => <ProfileContainer />} /> */}

const AppJS = () => {
  return (
    <BrowserRouter>
        <App />
    </BrowserRouter>
  )
}

// const mapStateToProps = (state) => {
//   return {
//       navbar: state.navbarPage.navbar
//   }
// }

// const AppContainer = compose(
//     withRouter,
//     connect(mapStateToProps))(App)

export default AppJS

// export default connect(mapStateToProps)(App)