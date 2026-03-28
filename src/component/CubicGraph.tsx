import {useRef, useEffect} from 'react';
interface CubicEquationProps {
  a: number;
  b: number;
  c: number;
  d: number;
}

export const CubicGraph = ({a, b, c , d}: CubicEquationProps) => { 
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect (() => {
  if (!canvas.current) return;                      
    const ctx = canvas.current.getContext("2d")!;  

    ctx.clearRect(0, 0, 600, 600);

    ctx.clearRect(0, 0, 600, 600);
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;

    for (let i = 0; i <= 600; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 600);
      ctx.moveTo(0, i);
      ctx.lineTo(600, i);
      ctx.stroke();
    }

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(600, 300);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 600);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = -300; x <= 300; x++) {
      const X = x / 20;
      const y = a * X * X * X + b * X * X + c * X + d;
      ctx.lineTo(300 + x, 300 - y * 20);
    }
    ctx.stroke();
  }, [a,b,c,d]);

  return < canvas ref={canvas} width={600} height={600} style={{ background: "white", borderRadius: "8px" }}  />
}