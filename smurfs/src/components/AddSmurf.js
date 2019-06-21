import React, { useState } from "react";

import { connect } from "react-redux";

import { addSmurf } from "../actions";

import Loader from "react-loader-spinner";

const AddSmurf = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const submitSmurf = e => {
    e.preventDefault();

    console.log('form submitted');

    props.addSmurf(name, age, height, () => {
      props.history.push('/smurfs');
    });
  };

  return (
    <form onSubmit={submitSmurf} className="add-smurf">
      <h2>Add a Smurf</h2>
      <div className="form-field">
        <label>Smurf Name</label>
        <input onChange={e => setName(e.target.value)} value={name} />
      </div>
      <div className="form-field">
        <label>Age</label>
        <input onChange={e => setAge(e.target.value)} value={age} />
      </div>
      <div className="form-field">
        <label>Height</label>
        <input onChange={e => setHeight(e.target.value)} value={height} />
      </div>
      <button action="submit" className={`submit ${props.adding ? 'loading' : null}`}>
        ADD SMURF
      </button>
      { props.adding ?
      <div className="embedded-spinner">
        <Loader type="Oval" color="#00BFFF" height="100" width="100" />
      </div> : null
      }
    </form>
  );
};

const mapStateToProps = state => ({
  adding: state.adding
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurf);