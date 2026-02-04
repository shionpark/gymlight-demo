import { type CanvasHTMLAttributes, forwardRef } from 'react';
import { StyledCanvas } from './Canvas.styles';

interface ISignatureProps extends CanvasHTMLAttributes<HTMLCanvasElement> {}

const Canvas = forwardRef<HTMLCanvasElement, ISignatureProps>((props, ref) => {
  return <StyledCanvas {...props} ref={ref} />;
});

export default Canvas;
