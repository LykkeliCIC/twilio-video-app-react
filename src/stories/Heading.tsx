import React from 'react';
import './heading.css';

export interface HeadingProps {
  label: string;
}

export const H1: React.FC<HeadingProps> = ({ label }) => {
  return <h1 className="lykkeli-heading">{label}</h1>;
};
