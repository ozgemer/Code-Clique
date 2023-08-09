import React from 'react';
import { SpecAvatar } from './SpecsTable.styled';

function SpecTableAvatar({ name, image, width = 36, height = 36 }) {
  function getColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function getAvatarName(name) {
    return name.indexOf(' ') != -1
      ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
      : name[0];
  }

  function getAvatar(name) {
    return {
      sx: {
        bgcolor: '#bdbdbd', //getColor(name),
        width: width,
        height: height,
      },
      children: getAvatarName(name),
    };
  }

  return <SpecAvatar {...getAvatar(`${name}`)} src={image} title={name} />;
}

export default SpecTableAvatar;
