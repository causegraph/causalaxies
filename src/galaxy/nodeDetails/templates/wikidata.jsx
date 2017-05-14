import React from 'react';
import commonPackageTemplate from './commonPackageTempalte.jsx';

export default require('maco').template(wikidata, React);

function wikidata(props) {
  var model = props.model;

  var link = 'https://wikidata.org/wiki/' + encodeURIComponent(model.name);
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
