import React from 'react';
import DropArea from '../DropArea';

const LayoutAreaDefault = () => {
  const wrapperStyle = {
    display: 'flex',
    width: 600,
    height: 200,
  };

  const layoutStyle1 = {
    width: 600,
    height: 200,
    border: '1px solid #ccc',
  };

  return (
    <div className="layout-area" style={wrapperStyle}>
      <div style={layoutStyle1}>
        <DropArea areaWidth={layoutStyle1.width} areaHeight={layoutStyle1.height} />
      </div>
    </div>
  );
};

export default LayoutAreaDefault;
