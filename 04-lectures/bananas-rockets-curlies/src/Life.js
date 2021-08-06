import React, { Component as Living, Fragment as EachOther } from 'react';


import LifeBeforeFlatiron from './Components/LifeBeforeFlatiron'
import BananasRocketsCurlies from './Components/BananasRocketsCurlies';
import LifeAfterFlatiron from './Components/LifeAfterFlatiron'


class Life extends Living {

  state={
    predictable: false,
  }

  render() {
    return (
      <div className="Life">
        <LifeBeforeFlatiron/>
        <EachOther>
          <BananasRocketsCurlies graduating={true} />
          <LifeAfterFlatiron/>
        </EachOther>
      </div>
    );
  }
}

export default Life;
