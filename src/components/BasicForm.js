import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFname,
    isValid: enteredFnameIsValid,
    hasError: fnameInputIsInvalid,
    valueChangeHandler: fnameInputChangeHandler,
    inputBlurHandler: fnameInputBlurHandler,
    reset: resetfnameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLname,
    isValid: enteredLnameIsValid,
    hasError: lnameInputIsInvalid,
    valueChangeHandler: lnameInputChangeHandler,
    inputBlurHandler: lnameInputBlurHandler,
    reset: resetlnameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredFname && enteredLname && enteredEmail) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredFnameIsValid && !enteredLnameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredFname);
    console.log(enteredLname);
    console.log(enteredEmail);

    resetfnameInput();
    resetlnameInput();
    resetEmailInput();
  };

  const fnameInputClasses = fnameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lnameInputClasses = lnameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fnameInputChangeHandler}
            onBlur={fnameInputBlurHandler}
            value={enteredFname}
          />
          {fnameInputIsInvalid && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lnameInputChangeHandler}
            onBlur={lnameInputBlurHandler}
            value={enteredLname}
          />
          {lnameInputIsInvalid && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
