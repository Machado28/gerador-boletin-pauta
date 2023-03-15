/* eslint-disable no-undef */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { dataMeu } from './data';
import './style.css';

export default ({ data = dataMeu }) => {
  return (
    <Menu id="display">
      {data?.map(item => (
        <a key={item.path} className="menu-item" href={item?.path}>
          {item?.title}
        </a>
      ))}
    </Menu>
  );
};
