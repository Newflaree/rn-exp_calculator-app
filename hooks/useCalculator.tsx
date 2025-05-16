import {
  useEffect,
  useRef,
  useState
} from 'react';


enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '/',
}

export const useCalculator = () => {
  const [ formula, setFormula ] = useState( '0' );
  const [ number, setNumber ] = useState( '0' );
  const [ prevNumber, setPrevNumber ] = useState( '0' );

  const lastOperation = useRef<Operator>( undefined );

  useEffect( () => {
    setFormula( number );

    return () => {}
  }, [ number ] );

  const buildNumber = ( numberString: string ) => {
    // Validar si ya existe el punto decimal
    if ( number.includes('.') && numberString === '.' )
      return;

    if ( number.startsWith('0') || number.startsWith('-0') ) {
      if ( numberString === '.' )
        return setNumber( number + numberString );

      // Evaluar si es otro cero y no hat punto
      if ( numberString === '0' && number.includes('.') )
        return setNumber( number + numberString );

      // Evaluar si es diferente de cero, no hay punto y es el primer número
      if ( numberString !== '0' && !number.includes('.') )
        return setNumber( numberString ) 

      if ( numberString === '0' && !number.includes('.') )
        return;
    }

    setNumber( number + numberString );
  }

  return {
    // Props
    formula,
    number,
    prevNumber,
    // Methods
    buildNumber
  }
}
