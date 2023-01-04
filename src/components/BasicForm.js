import React, { useRef, useState } from 'react';
import useInput from '../hooks/use-input';
import Input from '../UI/Input';
import classes from './BasicForm.module.css';

const isNotEmpty = ( value ) => value.trim() !== '';
const isEmail = ( value ) => value.includes( '@' );

const BasicForm = () => {

  const [ formSended, setFormSended ] = useState( false );

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const {
    value: nameValue,
    isValid: nameValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset
  } = useInput( isNotEmpty );

  const {
    value: emailValue,
    isValid: emailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput( isEmail );

  const {
    value: subjectValue,
    isValid: subjectValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: subjectReset
  } = useInput( isNotEmpty );

  const {
    value: messageValue,
    isValid: messageValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: messageReset
  } = useInput( isNotEmpty );

  let formIsValid = false;

  if ( nameValid && emailValid && subjectValid && messageValid ) {
    formIsValid = true;
  }

  const submitHandler = ( event ) => {
    event.preventDefault();

    if ( !formIsValid ) { return; }

    console.log( nameValue );
    console.log( emailValue );
    console.log( subjectValue );
    console.log( messageValue );

    setFormSended( true );

    nameReset();
    emailReset();
    subjectReset();
    messageReset();
  };

  return (
    <form onSubmit={ submitHandler } className={ classes.form }>
      <div className={ classes.row }>
        <Input
          isValid={ nameValid }
          className={ classes.box }
          hasError={ nameHasError }
          label='Name'
          ref={ nameRef }
          type='text'
          id='name'
          value={ nameValue }
          onChange={ nameChangeHandler }
          onBlur={ nameBlurHandler }
        />
        <Input
          isValid={ emailValid }
          className={ classes.box }
          hasError={ emailHasError }
          label='E-mail'
          ref={ emailRef }
          type='email'
          id='email'
          value={ emailValue }
          onChange={ emailChangeHandler }
          onBlur={ emailBlurHandler }
        />
      </div>
      <div className={ classes.row }>
        <Input
          isValid={ subjectValid }
          className={ classes.box }
          hasError={ subjectHasError }
          label='Subject'
          ref={ subjectRef }
          type='text'
          id='subject'
          value={ subjectValue }
          onChange={ subjectChangeHandler }
          onBlur={ subjectBlurHandler }
        />
      </div>
      <div className={ classes.row }>
        <Input
          isValid={ messageValid }
          className={ classes.box }
          hasError={ messageHasError }
          label='Message'
          ref={ messageRef }
          type='text'
          id='message'
          value={ messageValue }
          onChange={ messageChangeHandler }
          onBlur={ messageBlurHandler }
        />
      </div>
      <div className={ classes[ 'btn-submit' ] }>
        <button typeof='submit' className={ `${ classes.btn } ${ formSended ? classes.done : '' }` }>
          <span className={ `${ classes[ "btn__text" ] } ${ formSended ? classes.done : '' }` } > send</span>

          <svg className={ `${ classes[ "btn__progress" ] } ${ formSended ? classes.done : '' }` } viewBox="0 0 48 48" width="48px" height="48px">

            <circle className={ `${ classes[ "btn__progress-track" ] } ${ formSended ? classes.done : '' }` } cx="24" cy="24" r="20" fill="none" stroke="#aaa" strokeWidth="8">
            </circle>

            <circle className={ `${ classes[ "btn__progress-fill" ] } ${ formSended ? classes.done : '' }` } cx="24" cy="24" r="20" fill="none" stroke="blue" strokeWidth="8"
              transform="rotate(-90,24,24)">
            </circle>


            <polyline className={ `${ classes[ "btn__progress-text" ] } ${ formSended ? classes.done : '' }` } points="14,26 20,32 34,18" fill="none" stroke="#f00"
              strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          </svg>
        </button>
      </div>
    </form >
  );
};

export default BasicForm;
