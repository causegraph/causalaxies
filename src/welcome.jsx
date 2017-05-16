import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Welcome to CauseGraph!</h1>
        <h2>Choose a graph from the options below:</h2>
        <div className='media-list'>
          <Destination description='Influence relationships from Wikidata'
                      href='#/galaxy/wikidata?l=1'
                      media='wikidata_300px.png'
                      name='Wikidata Influences'/>
          <Destination description='Influence relationships from Wikipedia'
                      href='#/galaxy/dbpedia?l=1'
                      media='dbpedia_300px.png'
                      name='DBpedia Influences'/>
        </div>
      </div>
    );
  }
}
