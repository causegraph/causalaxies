import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Welcome to CauseGraph!</h1>
        <h2>Choose a graph from the options below:</h2>
        <div className='media-list'>
          <Destination description='Influence relationships from Wikipedia'
                      href='#/galaxy/dbpedia?l=1'
                      media='bower_fly_first.png'
                      name='DBpedia Influences'/>
        </div>
      </div>
    );
  }
}
