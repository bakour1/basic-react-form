import React, { useImperativeHandle, useRef, useState } from 'react';
import classes from './Input.module.css';

const isNotEmpty = ( value ) => value.trim() !== '';

const Input = React.forwardRef( ( props, ref ) => {

  const [ isFocused, setIsFocused ] = useState( false );

  const inputRef = useRef();

  useImperativeHandle( ref, () => {
    return {
      focus: inputRef.current.value
    };
  } );

  const focusHandler = ( event ) => {
    setIsFocused( true );
  };

  const blurHandler = ( event ) => {
    props.onBlur();
    if ( isNotEmpty( event.target.value ) ) {
      setIsFocused( true );
    } else {
      setIsFocused( false );
    }
  };

  return (
    <div
      className={ `${ classes.control }
                  ${ !props.isValid ? classes.invalid : '' }
                  ${ props.className }` }>

      <input
        className={ classes.input }
        ref={ inputRef }
        type={ props.type }
        id={ props.id }
        value={ props.value }
        onChange={ props.onChange }
        onBlur={ blurHandler }
        onFocus={ focusHandler }
      />
      <label htmlFor={ props.id } className={ `${ classes.info } ${ props.isValid || isFocused ? classes[ 'info--active' ] : ''
        }` }>
        <span className={ classes.label }>{ props.label }</span>
        <span className={ classes.valid }>
          <svg className={ classes[ 'valid-icon ' ] } viewBox="0 0 48 48" width="32px" height="32px">
            <polyline className={ `${ classes[ "valid__state-done" ] } ${ props.isValid ? classes.done : '' }` } points="14,26 20,32 34,18" fill="none" stroke="#f00"
              strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </label>
    </div>
  );
} );

export default Input;

























// import React, { useImperativeHandle, useRef } from 'react';
// import classes from '../index.css';

// const Input = React.forwardRef( ( props, ref ) => {

//   const inputRef = useRef();

//   useImperativeHandle( ref, () => {
//     return {
//       focus: inputRef.current.focus
//     };
//   } );

//   return (
//     <div className={ `${ classes.control } ${ props.isValid === false ? classes.invalid : '' } ` }>
//       <input
//         ref={ inputRef }
//         type={ props.type }
//         id={ props.id }
//         value={ props.value }
//         onChange={ props.onChange }
//         onBlur={ props.onBlur }
//       />
//       <label htmlFor={ props.id }>{ props.label }</label>
//     </div>
//   );
// } );

// export default Input;
