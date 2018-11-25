import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bulma';
import './scss/style.scss';

// import Navbar from './components/Navbar';
// import SecureRoute from './components/SecureRoute';
import FlashMessages from './components/FlashMessages';
// import Register from './components/Register';
// import ArtistIndex from './components/artists/ArtistIndex';
// import ArtistNew from './components/artists/ArtistNew';
// import ArtistShow from './components/artists/ArtistShow';
// import Login from './components/Login';
// import UserShow from './components/users/UserShow';
// import UserEdit from './components/users/UserEdit';
// import PaintingsShow from './components/paintings/PaintingsShow';
// import PaintingsNew from './components/paintings/PaintingsNew';
// import JourneysIndex from './components/journeys/JourneyIndex';
// import JourneyShow from './components/journeys/JourneyShow';
import Scanner from './components/scanner/ScannerCard';

// import Main from './components/Main';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>

          <FlashMessages />
          <h1 className="title is-2">RoyScanner</h1>
          <Switch>
            <Route path="/scanner" component={Scanner} />

            <Route path="/" component={Scanner} />
          </Switch>

        </div>
      </BrowserRouter>


    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
