import React from 'react';

const container = {
  borderRadius: '50%',
  backgroundColor: '#f7f7f7',
  margin: 'auto',
};

const imgIcon = {
  width: '100%',
  height: '100%',
};

const Icon = (props) => {
  const {
    icon,
    name,
    style,
    ...rest
  } = props;

  return (
    <div style={{ ...container, ...style }} {...rest}>
      <img src={icon} alt={name} style={imgIcon} />
    </div>
  );
};

export default Icon;
