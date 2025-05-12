declare module 'react-world-flags' {
  import { ComponentType, CSSProperties } from 'react';

  interface FlagProps {
    code: string;
    style?: CSSProperties;
    className?: string;
  }

  const Flag: ComponentType<FlagProps>;
  export default Flag;
}
