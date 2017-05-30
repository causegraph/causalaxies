import React from 'react';
import commonPackageTemplate from './commonPackageTempalte.jsx';

export default require('maco').template(wikidata, React);

function wikidata(props) {
  var model = props.model;

  var id_array = model.name.split(' ')
  var link = 'https://wikidata.org/wiki/' +
             encodeURIComponent(id_array[id_array.length - 1]);
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
