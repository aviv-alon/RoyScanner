import React from 'react';
import ReactFilestack from 'react-filestack';
import axios from 'axios';
import Auth from '../../lib/Auth';
import keys from '../../lib/keys';


class ScannerCard extends React.Component {
  constructor() {
    super();
    this.state = { status: 0, webEntities: []};
    console.log('constructor this.state');
    console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }

  handleChange(data) {
    console.log(data);
    this.handleStatus(1);
    const token = Auth.getToken();
    axios
      .post('/api/scanner', data, {
        headers: {Authorization: `Bearer ${token}`}
      })
      // .then(el => el.data.isMatch ? this.handleStatus(2) : this.handleStatus(-1))
      // .then(el => console.log(el.data.webEntities) )
      .then(el =>  {
        if(el.data.webEntities) {
          this.setState({ webEntities: el.data.webEntities});
          console.log(this.state.webEntities);
          this.handleStatus(2);
        } else
          this.handleStatus(-1);
      })
      .catch((err) => this.setState({ errors: err.response.data.errors }));

  }

  handleStatus(status) {
    switch(status){
      case 1: // Loading - sended request and wait to answer
        this.setState({ status: 1});
        break;
      case 2: // Done - the photo match to painting
        this.setState({ status: 2});
        this.state.taskDone();
        break;
      case -1: // not match photo
        this.setState({ status: -1});
        break;


    }

  }


  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');

    return(
      <main>
        {(this.state.status <= 0) ?
          <div>
            <div className="has-text-centered">
              <ReactFilestack
                apikey={ keys.filestack }
                mode={'pick'}
                onSuccess={(response) => this.handleChange({
                  photoUrl: response.filesUploaded[0].url
                })}
                onError={(e) => console.log(e)}
                buttonText={'Take Photo'}
                buttonClass={'button is-rounded task-stat'}
              />
            </div>
            {(this.state.status === -1) &&
              <p> Please upload match photo </p>}
          </div>:
          (this.state.status === 1) ?
            <button className="button is-rounded is-loading task-stat">Loading</button>:
            (this.state.status === 2) ?
              <div className="card">
                <div className="content">
                  {this.state.webEntities.map(el => <div key={el.entityId}> <a href= {'https://www.google.co.il/search?q='+ el.description.split(' ').join('+')}>{el.description}</a>  </div>)}
                </div>
              </div> :
              <p> error </p>
        }
      </main>
    );


  }
}

export default ScannerCard;
