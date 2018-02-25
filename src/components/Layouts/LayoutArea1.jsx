import React from 'react';
import DropArea from '../DropArea';

const LayoutArea1 = () => {
  const wrapperStyle = {
    display: 'flex',
    width: 600,
    height: 200,
  };

  const layoutStyle1 = {
    width: 300,
    height: 200,
    border: '1px solid #ccc',
  };

  const layoutStyle2 = {
    width: 300,
    height: 100,
    border: '1px solid #ccc',
  };

  const layoutStyle3 = {
    width: 300,
    height: 100,
    border: '1px solid #ccc',
  };

  return (
    <div className="layout-area" style={wrapperStyle}>
      <div style={layoutStyle1}>
        <DropArea areaWidth={layoutStyle1.width} areaHeight={layoutStyle1.height} />
      </div>
      <div>
        <div style={layoutStyle2}>
          <DropArea areaWidth={layoutStyle2.width} areaHeight={layoutStyle2.height} />
        </div>
        <div style={layoutStyle3}>
          <DropArea areaWidth={layoutStyle3.width} areaHeight={layoutStyle3.height} />
        </div>
      </div>
    </div>
  );
};

export default LayoutArea1;
