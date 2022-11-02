import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { IoCreateOutline } from 'react-icons/io5';

const Index = () => {
  return (
    <div className="notes-toolbar-container">
      <MdDeleteOutline className="notes-cursor" />
      <IoCreateOutline className="notes-cursor" />
    </div>
  );
};
export default Index;
