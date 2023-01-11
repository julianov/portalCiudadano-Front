import Logo from '../../Assets/medalla.svg'

import '../../Styles/images.css';


export const ImagenMedalla: React.FC<{width?:string, number?:string}> = ({width='300px', number='0'}) => {
  
  return (<>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 800 800" width={width}>
    <g id="Icono">
      <g id="Medalla">
        <path className="st0" d="M658.2,411.6c-14.5,34.4-36.3,65.2-63.7,90.4c-43.2,44.3-101.9,73.3-167.4,78.3L489,784.2
          c6.1,20.1,35,21.3,43,1.9l37.3-91.2c9.8-24.1,40.5-32.7,62.2-17.6l89,62c15.4,10.7,36.1-3.4,30.7-21L658.2,411.6z"/>
        <path className="st0" d="M212.5,494.6c-23.8-23.8-43-51.8-56.1-83l-93,306.7c-5.3,17.6,15.4,31.7,30.7,21l89-62
          c21.7-15.1,52.4-6.5,62.2,17.6l37.3,91.2c7.9,19.4,36.9,18.2,43-1.9l61.9-203.8C318.1,575.2,256.4,543.2,212.5,494.6"/>
        <path className="st1" d="M669,331c0,144.7-117.3,262.1-262.1,262.1S144.8,475.8,144.8,331C144.8,186.3,262.2,69,406.9,69
          S669,186.3,669,331"/>
        <path className="st2" d="M600,331c0,106.6-86.5,193.1-193.1,193.1S213.8,437.7,213.8,331c0-106.6,86.5-193.1,193.1-193.1
          S600,224.4,600,331"/>
      </g>
      <g id="Estrellas">
        <path className="st2" d="M62,69c5.2,3.9,9.9,8.6,13.8,13.8c3.9-5.2,8.6-9.9,13.8-13.8c-5.2-3.9-9.9-8.6-13.8-13.8
          C71.9,60.4,67.3,65,62,69 M75.9,137.9c-7.6,0-13.8-6.2-13.8-13.8c0-22.8-18.6-41.4-41.4-41.4c-7.6,0-13.8-6.2-13.8-13.8
          s6.2-13.8,13.8-13.8c22.8,0,41.4-18.6,41.4-41.4C62.1,6.2,68.2,0,75.9,0c7.6,0,13.8,6.2,13.8,13.8c0,22.8,18.6,41.4,41.4,41.4
          c7.6,0,13.8,6.2,13.8,13.8s-6.2,13.8-13.8,13.8c-22.8,0-41.4,18.6-41.4,41.4C89.7,131.8,83.5,137.9,75.9,137.9"/>
        <path className="st2" d="M751.7,275.9c-7.6,0-13.8-6.2-13.8-13.8v-55.2c0-7.6,6.2-13.8,13.8-13.8s13.8,6.2,13.8,13.8v55.2
          C765.5,269.7,759.4,275.9,751.7,275.9 M779.3,248.3h-55.2c-7.6,0-13.8-6.2-13.8-13.8c0-7.6,6.2-13.8,13.8-13.8h55.2
          c7.6,0,13.8,6.2,13.8,13.8C793.1,242.1,786.9,248.3,779.3,248.3"/>
        <path className="st2" d="M48.3,358.6c0,7.6-6.2,13.8-13.8,13.8s-13.8-6.2-13.8-13.8c0-7.6,6.2-13.8,13.8-13.8S48.3,351,48.3,358.6"/>
      </g>
      <text id="Numero" transform="matrix(1 0 0 1 324.3799 442)" className="st3">{number}</text>
    </g>
    </svg>
  </>)
}


/*

export const ImagenMedalla: React.FC<{width?:string}> = ({width='300px'}) => {
  
  return (<>
    <div style={{height:'auto', width}}>
    <img
      src={Logo}
      alt="Validación"
    />
    </div>
  </>)
}

*/