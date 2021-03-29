import React from 'react';

export default function Avatar(props) {
  // console.log(props)
  const {src, width, title} = props;
  const _src = src.replace(/\s/g, '')
  return <img src={_src} alt={title} title={title} width={width} height={width} style={{borderRadius: '3px'}}/>
}
