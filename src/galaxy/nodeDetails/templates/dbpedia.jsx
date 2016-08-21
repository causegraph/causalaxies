import React from 'react';
import commonPackageTemplate from './commonPackageTempalte.jsx';

export default require('maco').template(dbpedia, React);

function dbpedia(props) {
  var model = props.model;

  var link = 'https://en.wikipedia.org/wiki/' + encodeURIComponent(model.name);
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
