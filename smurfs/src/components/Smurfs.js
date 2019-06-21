import React from "react";

import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

import Loader from 'react-loader-spinner'

class Smurfs extends React.Component {
  componentDidMount () {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="smurfs">
        {
          this.props.fetching ?
          <Loader 
         type="Oval"
         color="#00BFFF"
         height="100"	
         width="100"
      />   : null}
        {this.props.smurfs.map(smurf => (
          <div key={smurf.id} className="smurf">
            <h3>{smurf.name}</h3>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.fetching
});

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
