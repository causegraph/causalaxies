import React from 'react';
import commonPackageTemplate from './commonPackageTempalte.jsx';

export default require('maco').template(opentreeoflife, React);

function opentreeoflife(props) {
  var model = props.model;

  var id_array = model.name.split(' ')
  var link = 'https://tree.opentreeoflife.org/taxonomy/browse?id=' +
             encodeURIComponent(id_array[id_array.length - 1]);
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
