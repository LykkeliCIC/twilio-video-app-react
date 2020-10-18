import React, { CSSProperties } from 'react';
import lykkeliLogo from './lykkeli.png';

export default function LykkeliLogo(props: { style?: CSSProperties; className?: string } = {}) {
  return <img alt="Lykkeli Logo" {...props} src={lykkeliLogo} />;
}
