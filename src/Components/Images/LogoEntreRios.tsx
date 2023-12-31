import { SVGPath } from '../Elements/StyledComponents'

const GetColors = (type:string) => {
  switch(type){
    case 'color':
      return ["var(--primary)","var(--secondary)","var(--tertiary)","var(--maincolor_text)"];
    default:
      return [type,type,type,type];
  }
}

export const LogoER: React.FC<{color?:string, width?:string}> = ({color='color', width='300px'}) => {

  const colors = GetColors(color);
  
  return (<div style={{height:'auto', width}}><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 597 156">
    <g>
      <SVGPath color={colors[0]} d="M207 95c1,6 6,10 15,10 4,0 10,-1 13,-4l7 7c-5,6 -13,8 -20,8 -17,0 -27,-10 -27,-25 0,-15 10,-26 26,-26 16,0 26,10 24,30l-38 0zm27 -10l0 0c-1,-6 -6,-9 -13,-9 -6,0 -12,3 -13,9l26 0z"/>
      <SVGPath color={colors[0]} d="M288 115l0 -25c0,-8 -4,-13 -12,-13 -7,0 -12,6 -12,13l0 25 -12 0 0 -48 11 0 1 6c5,-5 9,-7 16,-7 11,0 20,9 20,24l0 25 -12 0z"/>
      <SVGPath color={colors[0]} d="M323 53l0 14 14 0 0 10 -14 0 0 21c0,5 3,7 6,7 2,0 4,-1 6,-2l4 10c-4,2 -7,2 -10,3 -11,0 -18,-6 -18,-18l0 -21 -9 0 0 -10 9 0 0 -13 12 -1z"/>
      <SVGPath color={colors[0]} d="M355 67l1 5c3,-6 8,-6 13,-6 5,0 10,1 13,4l-6 10c-2,-2 -4,-3 -8,-3 -7,0 -12,4 -12,13l0 25 -12 0 0 -48 11 0z"/>
      <SVGPath color={colors[0]} d="M395 95c0,6 6,10 14,10 4,0 10,-1 13,-4l8 7c-6,6 -14,8 -21,8 -17,0 -27,-10 -27,-25 0,-15 10,-26 26,-26 16,0 26,10 24,30l-37 0zm26 -10l0 0c-1,-6 -6,-9 -13,-9 -6,0 -11,3 -13,9l26 0z"/>
      <SVGPath color={colors[1]} d="M450 67l1 5c4,-6 9,-6 14,-6 5,0 9,1 12,4l-5 10c-3,-2 -5,-3 -9,-3 -6,0 -12,4 -12,13l0 25 -12 0 0 -48 11 0z"/>
      <SVGPath color={colors[1]} d="M480 115l0 -47 12 0 0 47 -12 0zm17 -68l0 0 -13 0 -4 14 0 0 10 0 7 -14 0 0z"/>
      <SVGPath color={colors[1]} d="M550 91c0,14 -9,25 -25,25 -15,0 -25,-11 -25,-25 0,-14 10,-25 25,-25 16,0 25,11 25,25zm-38 0l0 0c0,7 5,14 13,14 9,0 13,-7 13,-14 0,-7 -5,-14 -13,-14 -8,0 -13,7 -13,14z"/>
      <SVGPath color={colors[1]} d="M588 80c-3,-4 -7,-5 -12,-5 -5,0 -8,2 -8,5 0,3 3,5 9,5 9,1 20,3 20,16 0,8 -7,16 -20,16 -8,0 -16,-2 -23,-9l6 -9c4,4 11,7 17,7 4,0 8,-2 8,-6 0,-3 -2,-4 -9,-5 -9,0 -20,-4 -20,-15 0,-11 12,-15 20,-15 8,0 13,2 19,7l-7 8z"/>
    </g>
    <g>
      <SVGPath color={colors[0]} d="M169 20c-21,0 -40,9 -52,24 -7,8 -11,18 -14,30 -1,4 0,14 0,14l0 6c0,0 -5,13 -10,18 -10,10 -24,13 -36,9 0,0 0,0 0,0l41 -41c2,-16 8,-30 18,-42 -4,-3 -8,-7 -13,-9 -10,-7 -23,-10 -35,-10 -17,0 -35,6 -48,20 -12,11 -18,27 -20,42 0,2 0,4 0,6 0,12 3,24 10,35 3,5 6,9 10,13 4,4 8,7 13,10 21,13 48,13 70,0l0 11 30 0c0,0 0,-67 0,-68 0,-20 17,-36 36,-36 10,0 21,4 26,10l0 -38c-7,-3 -17,-4 -26,-4zm-137 67l0 0c0,-2 1,-4 1,-6 1,-7 4,-14 10,-19 7,-7 16,-11 25,-11 4,0 7,1 11,2l-45 45c-1,-4 -2,-8 -2,-11z"/>
      <SVGPath color={colors[2]} d="M170 15c5,0 10,0 15,2 0,-1 0,-1 0,-1 0,-9 -6,-16 -15,-16 -9,0 -16,7 -16,15 0,1 0,1 0,2 5,-2 10,-2 16,-2z"/>
    </g>
    <g>
      <SVGPath color={colors[3]} d="M218,136c-2-2-5-3-7-3c-7,0-10,5-10,10s3,10,10,10c2,0,5-1,6-3v-6h-7v-1h9v8c-2,2-5,4-8,4c-8,0-12-6-12-12 c0-7,5-11,12-11c3,0,6,1,8,3L218,136z"/>
      <SVGPath color={colors[3]} d="M255,143c0,6-4,12-11,12c-8,0-12-6-12-12s4-11,12-11C251,132,255,137,255,143z M234,143L234,143 c0,5,3,10,10,10c6,0,9-5,9-10s-3-10-9-10C237,133,234,138,234,143z"/>
      <SVGPath color={colors[3]} d="M285,138c0,2-1,4-4,5c3,1,5,3,5,5c0,5-5,6-8,6c-4,0-6,0-9,0v-22c3,0,5,0,9,0C281,132,285,134,285,138z M270,142L270,142h8c3,0,5-1,5-4s-3-5-5-5h-8V142z M270,153L270,153h8c2,0,6-1,6-5c0-3-3-4-6-4s-5,0-8,0V153z"/>
      <SVGPath color={colors[3]} d="M299,154v-22h2v22H299z"/>
      <SVGPath color={colors[3]} d="M317,142h13v2h-13v9h14v1h-15v-22h15v2h-14V142z"/>
      <SVGPath color={colors[3]} d="M363,154h-3l-7-8h-6v8h-2v-22c3,0,6,0,10,0c5,0,7,3,7,7s-2,7-7,7L363,154z M347,144L347,144h7c4,0,6-2,6-5 s-2-5-5-5h-8V144z"/>
      <SVGPath color={colors[3]} d="M376,132l15,18v-18h2v22h-1l-15-18v18h-2v-22H376z"/>
      <SVGPath color={colors[3]} d="M429,143c0,6-4,12-11,12c-8,0-12-6-12-12s4-11,12-11C425,132,429,137,429,143z M408,143L408,143 c0,5,3,10,10,10c6,0,9-5,9-10s-3-10-9-10C411,133,408,138,408,143z"/>
    </g>
  </svg></div>)
}