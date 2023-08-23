import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
// 	margin: 0.5rem 0;

// 	& label {
// 		font-weight: bold;
// 		display: block;
// 		margin-bottom: 0.5rem;
// 		background: ${(props) => (props.inValid ? "#ffd7d7" : "transparent")};
// 	}

// 	& input {
// 		display: block;
// 		width: 100%;
// 		border: 1px solid ${(props) => (props.inValid ? "red" : "black")};
// 		font: inherit;
// 		line-height: 1.5rem;
// 		padding: 0 0.25rem;
// 	}

// 	& input:hover {
// 		outline: none;
// 		background: #fad0ec;
// 		border-color: #8b005d;
// 	}
// `;

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
		setEnteredValue("");
		event.target[0].value = "";
	};

	return (
		<form onSubmit={formSubmitHandler}>
			{/* <FormControl inValid={!isValid}> */}
			<div
				className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
			>
				<label>Course Goal</label>
				<input type="text" onChange={goalInputChangeHandler} />
				{/* </FormControl> */}
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
