import React from 'react';
export default require('maco').template(about, React);

function about() {
  return (
  <div  className='label about'>
     <a className='reset-color'
        target='_blank'
        href="https://github.com/causegraph/causalaxies/tree/master/about#causalaxies-documentation">About...</a>
  </div>
  );
}
