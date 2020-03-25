import React from 'react';
import { Geography, Geographies, ComposableMap } from 'react-simple-maps';
import canada from './canada.json';

const geoStyles = {
  default: { fill: '#03A9F4', transform: 'scale(2)' },
  hover: { fill: '#2196F3', transform: 'scale(2)' },
};

function click(geography) {
  console.log(geography);
}

function Map() {
  return (
    <ComposableMap>
      <Geographies geography={canada}>
        {(geographies, projection) =>
          geographies.map((geography) => (
            <Geography
              key={geography.id}
              geography={geography}
              projection={projection}
              style={geoStyles}
              onClick={() => click(geography)}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}

export default Map;
