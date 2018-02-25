import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { PinchView } from 'react-pinch-zoom-pan';

export default class DropArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
    };
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop([{ preview }]) {
    this.setState({ preview });
    // console.log(preview);
  }

  render() {
    const { preview } = this.state;
    const dropzoneStyle = {
      width: '100%',
      height: '100%',
    };
    const imgStyle = {
      margin: 'auto',
      width: '100%',
      height: 'auto',
      textAlign: 'center',
    };
    const width = this.props.areaWidth;
    const height = this.props.areaHeight;

    return (
      <div className="drop-area">
        <Dropzone
          disableClick
          accept="image/jpeg, image/png"
          onDrop={this.handleDrop}
          style={dropzoneStyle}
        >
          <PinchView maxScale={4} containerRatio={(height / width) * 100}>
            <img src={preview} alt="Drop Area" style={imgStyle} />
          </PinchView>
        </Dropzone>
      </div>
    );
  }
}

DropArea.propTypes = {
  areaWidth: PropTypes.number.isRequired,
  areaHeight: PropTypes.number.isRequired,
};
