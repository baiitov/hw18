import { useState } from 'react'

const BasicForm = () => {
	const [firstName, setFirstName] = useState('')
	const [firstIsValid, setFirstIsValid] = useState(false)
	const [lastName, setLastName] = useState('')
	const [lastNameIsValid, setLastNameIsValid] = useState(false)
	const [email, setEmail] = useState('')
	const [emailIsValid, setEmailIsValid] = useState(false)
	//firstname
	const firstNameIsvalid = firstName.trim() !== ''
	const nameInputIsValid = !firstNameIsvalid && firstIsValid
	//last name
	const lastIsValid = lastName.trim() !== ''
	const lastInputIsValid = !lastIsValid && lastNameIsValid
	// email
	const emailNameIsValid = email.trim() !== ''
	const emailInputIsValid = !emailNameIsValid && emailIsValid

	const firstOnchangeHandler = (event) => {
		setFirstName(event.target.value)
	}
	const firstBlurHandler = () => {
		setFirstIsValid(true)
	}
	const lastNameChangeHandler = (event) => {
		setLastName(event.target.value)
	}
	const lastNameBlurHandler = () => {
		setLastNameIsValid(true)
	}
	const emailNameHandler = (event) => {
		setEmail(event.target.value)
	}
	const emailNameBlurHandler = () => {
		setEmailIsValid(true)
	}

	const firstclasses = !nameInputIsValid
		? 'form-control'
		: 'form-control invalid'
	const lastclasses = !lastInputIsValid
		? 'form-control'
		: 'form-control invalid'
	const emailclasses = !emailInputIsValid
		? 'form-control'
		: ' form-control invalid'
	const onSubmitHandler = (event) => {
		event.preventDefault()
		// first name
		setFirstIsValid(true)
		if (!firstNameIsvalid) return
		setFirstName('')
		setFirstIsValid(false)
		// last name
		setLastNameIsValid(true)
		if (!lastIsValid) return
		setLastName('')
		setLastNameIsValid(false)
		// email
		setEmailIsValid(true)
		if (!emailIsValid) return
		setEmail('')
		setEmailIsValid(false)
	}
	let formIsfalid = false
	if (firstNameIsvalid && lastIsValid && emailIsValid) {
		formIsfalid = true
	}
	return (
		<form onSubmit={onSubmitHandler}>
			<div className='control-group'>
				<div className={firstclasses}>
					<label htmlFor='name'>First Name</label>
					<input
						onBlur={firstBlurHandler}
						onChange={firstOnchangeHandler}
						type='text'
						id='name'
					/>
					{nameInputIsValid && (
						<p style={{ color: 'red' }}>name must not be empty</p>
					)}
				</div>
				<div className={lastclasses}>
					<label htmlFor='name'>Last Name</label>
					<input
						onBlur={lastNameBlurHandler}
						onChange={lastNameChangeHandler}
						type='text'
						id='name'
					/>
					{lastInputIsValid && (
						<p style={{ color: 'red' }}>
							last name must not be empty
						</p>
					)}
				</div>
			</div>
			<div className={emailclasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					onChange={emailNameHandler}
					onBlur={emailNameBlurHandler}
					type='text'
					id='name'
				/>
				{emailInputIsValid && (
					<p style={{ color: 'red' }}>email must not be empty</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsfalid}>Submit</button>
			</div>
		</form>
	)
}

export default BasicForm
