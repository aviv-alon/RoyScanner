import React from 'react';

class Footer extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>RoyScanner </strong> An awesome website by
            <a href="https://github.com/aviv-alon"> Aviv </a>.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
