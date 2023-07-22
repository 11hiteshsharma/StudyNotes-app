import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import styled from "@emotion/styled";

import { useDispatch, useSelector } from "react-redux";

import {
	Paper,
	Box,
	Typography,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Button,
	MobileStepper,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
} from "@mui/material";
import { OpenModal } from "@/redux/slices/quizModal";

const steps = [
	{
		question: "What is the purpose of the 'fetch' function in JavaScript?",
		options: [
			"To make HTTP requests and retrieve data from a server",
			"To create animations and transitions in web pages",
			"To handle form submissions in web applications",
			"To manipulate the DOM and update web page content",
		],
	},
	{
		question: "What is the difference between margin and padding in CSS?",
		options: [
			"Margin controls the space outside an element, while padding controls the space inside an element",
			"Margin and padding are two different CSS selectors",
			"Margin sets the font size, while padding sets the element's width",
			"Margin is used for vertical alignment, while padding is used for horizontal alignment",
		],
	},
	{
		question: "What is the purpose of the 'useEffect' hook in React?",
		options: [
			"To perform side effects in functional components",
			"To handle form validation in React forms",
			"To define styles for React components",
			"To manage component state in class components",
		],
	},
	{
		question: "What is HTML?",
		options: [
			"Hyper Text Markup Language",
			"Home Tool Markup Language",
			"Hyperlinks and Text Markup Language",
			"Hyper Tool Markup Language",
		],
	},
	{
		question: "Which of the following is not a CSS framework?",
		options: ["Bootstrap", "Tailwind CSS", "Laravel", "Bulma"],
	},
	{
		question: "What is the purpose of JavaScript?",
		options: [
			"To add interactivity to web pages",
			"To style web pages",
			"To structure web pages",
			"To define the layout of web pages",
		],
	},
	{
		question:
			"Which programming language is used for server-side web development?",
		options: ["Python", "JavaScript", "PHP", "Ruby"],
	},
	{
		question: "What does CSS stand for?",
		options: [
			"Cascading Style Sheets",
			"Computer Style Sheets",
			"Colorful Style Sheets",
			"Creative Style Sheets",
		],
	},
	{
		question: "What does the 'HTTP' acronym stand for?",
		options: [
			"Hypertext Transfer Protocol",
			"Hyperlink Text Transfer Protocol",
			"Hypertext Text Transfer Protocol",
			"Hypertext Terminal Protocol",
		],
	},
	{
		question: "What is the purpose of the 'useState' hook in React?",
		options: [
			"To manage state in functional components",
			"To handle user input in React forms",
			"To create reusable components in React",
			"To fetch data from an API in React",
		],
	},
];

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function ScrollDialog() {
	const dispatch = useDispatch();
	const open = useSelector((state) => state.QuizModal.open);

	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = steps.length;

	const [answers, setAnswers] = useState([]);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleClose = () => {
		dispatch(OpenModal(!open));
	};

	// const handleAnswerChange = (questionIndex, optionIndex) => {
	// 	console.log("questionIndex", questionIndex);
	// 	console.log("optionIndex", optionIndex);
	// 	setAnswers((prevAnswers) => {
	// 		const updatedAnswers = [...prevAnswers];
	// 		updatedAnswers[questionIndex] = {
	// 			answer: optionIndex,
	// 		};
	// 		return updatedAnswers;
	// 	});
	// };

	const handleAnswerChange = (questionId, answer) => {
		const updatedAnswers = [...answers];
		const questionIndex = updatedAnswers.findIndex(
			(item) => item.questionId === questionId
		);

		if (questionIndex !== -1) {
			updatedAnswers[questionIndex].answer = answer;
		} else {
			updatedAnswers.push({ questionId, answer });
		}

		setAnswers(updatedAnswers);
	};

	const handleSubmit = () => {
		// Handle the submission of answers
		console.log("Submitted answers:", answers);

		// Reset activeStep to the first step
		setActiveStep(0);

		// Reset answers
		setAnswers([]);

		// Close the dialog
		handleClose();
	};

	const descriptionElementRef = React.useRef(null);
	React.useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [open]);

	return (
		<div>
			<Dialog
				open={open}
				scroll="paper"
				fullWidth
				maxWidth="md"
				TransitionComponent={Transition}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description">
				<CloseIcon onClick={() => handleClose()}>
					<AiOutlineClose size={20} />
				</CloseIcon>
				<DialogTitle id="scroll-dialog-title">
					<Paper
						square
						elevation={0}
						sx={{
							display: "flex",
							alignItems: "center",
							height: 50,
							bgcolor: "background.default",
						}}>
						<Typography>{steps[activeStep].question}</Typography>
					</Paper>
				</DialogTitle>

				<DialogContent dividers="paper" style={{ minHeight: "60vh" }}>
					<Answers elevation={0}>
						<FormControl component="fieldset">
							<RadioGroup
								value={
									answers.find((item) => item.questionId === activeStep)
										?.answer || ""
								}
								onChange={(e) =>
									handleAnswerChange(activeStep, e.target.value)
								}>
								{steps[activeStep].options.map((option, optionIndex) => (
									<FormControlLabel
										key={optionIndex}
										value={option}
										control={<Radio color="success" />}
										label={option}
									/>
								))}
							</RadioGroup>
						</FormControl>
					</Answers>
				</DialogContent>
				<DialogActions>
					<MobileStepper
						variant="progress"
						steps={maxSteps}
						position="static"
						activeStep={activeStep}
						sx={{ maxWidth: 400, flexGrow: 1 }}
						nextButton={
							activeStep === maxSteps - 1 ? (
								<Button
									size="small"
									onClick={() => {
										handleSubmit();
									}}>
									Submit
								</Button>
							) : (
								<Button
									size="small"
									onClick={() => {
										handleNext();
									}}
									disabled={activeStep === maxSteps - 1}>
									Next
									{theme.direction === "rtl" ? (
										<AiFillCaretLeft />
									) : (
										<AiFillCaretRight />
									)}
								</Button>
							)
						}
						backButton={
							<Button
								size="small"
								onClick={() => {
									handleBack();
								}}
								disabled={activeStep === 0}>
								{theme.direction === "rtl" ? (
									<AiFillCaretRight />
								) : (
									<AiFillCaretLeft />
								)}
								Back
							</Button>
						}
					/>
				</DialogActions>
			</Dialog>
		</div>
	);
}

const Answers = styled(Paper)`
	margin-block: 2.2vw;
`;

const CloseIcon = styled.div`
	position: absolute;
	top: 30px;
	right: 20px;
	cursor: pointer;
`;
