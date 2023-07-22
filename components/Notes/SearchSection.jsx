import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

export default function BasicSelect({ NotesData, setSearchFilter }) {
	const [collegeYear, setCollegeYear] = useState();

	const [branch, setBranch] = useState("");

	const [subject, setSubject] = useState("");

	const handleCollegeYearChange = (event) => {
		setCollegeYear(event.target.value);
		setBranch("");
		setSubject("");
	};

	const handleBranchChange = (event) => {
		setBranch(event.target.value);
		setSubject("");
	};

	const handleSubjectChange = (event) => {
		setSubject(event.target.value);
	};

	const handleSearch = () => {
		if (collegeYear || branch || subject) {
			setSearchFilter((prev) => {
				return NotesData.filter((item) => {
					return (
						(collegeYear === null || item?.year === collegeYear) &&
						(branch === "" || item?.branch === branch) &&
						(subject === "" || item?.subject === subject)
					);
				});
			});
		}
	};

	function BranchMenu(collegeYear) {
		const filteredData = NotesData.filter((item) => item.year === collegeYear);

		const menuItems = [];

		const uniqueBranches = new Set();

		filteredData.forEach((item, index) => {
			const branchName = item.branch;
			if (!uniqueBranches.has(branchName)) {
				uniqueBranches.add(branchName);
				menuItems.push(
					<MenuItem value={branchName} key={index + 1}>
						{branchName}
					</MenuItem>
				);
			}
		});

		return menuItems;
	}

	function SubjectMenu(collegeYear, branch) {
		const filteredData = NotesData.filter((item) => {
			return (
				(!collegeYear || item.year === collegeYear) &&
				(!branch || item.branch === branch)
			);
		});

		const menuItems = [];

		filteredData.forEach((item, index) => {
			const subjectName = item.subject;
			menuItems.push(
				<MenuItem value={subjectName} key={index + 1}>
					{subjectName}
				</MenuItem>
			);
		});

		return menuItems;
	}

	return (
		<Box sx={{ minWidth: 300 }}>
			<SelectContainer>
				<FormControl sx={{ marginBottom: "20px" }}>
					<InputLabel id="college-year-label">College Year</InputLabel>
					<Select
						labelId="college-year-label"
						id="college-year-select"
						value={collegeYear}
						label="College Year"
						onChange={handleCollegeYearChange}
						onClose={() => {
							setTimeout(() => {
								document.activeElement.blur();
							}, 0);
						}}>
						<MenuItem value="First Year">
							<p>
								1<sup>st</sup> year
							</p>
						</MenuItem>
						<MenuItem value="Second Year">
							<p>
								2<sup>nd</sup> year
							</p>
						</MenuItem>
						<MenuItem value="Third Year">
							<p>
								3<sup>rd</sup> year
							</p>
						</MenuItem>
						<MenuItem value="Fourth Year">
							<p>
								4<sup>th</sup> year
							</p>
						</MenuItem>
					</Select>
				</FormControl>

				{collegeYear && (
					<FormControl sx={{ marginBottom: "20px" }}>
						<InputLabel id="branch-label">Branch</InputLabel>
						<Select
							labelId="branch-label"
							id="branch-select"
							value={branch}
							label="Branch"
							onChange={handleBranchChange}
							onClose={() => {
								setTimeout(() => {
									document.activeElement.blur();
								}, 0);
							}}>
							{BranchMenu(collegeYear)}
						</Select>
					</FormControl>
				)}

				{collegeYear && branch && (
					<FormControl sx={{ marginBottom: "20px" }}>
						<InputLabel id="subject-label">Subject</InputLabel>
						<Select
							labelId="subject-label"
							id="subject-select"
							value={subject}
							label="Subject"
							onChange={handleSubjectChange}
							onClose={() => {
								setTimeout(() => {
									document.activeElement.blur();
								}, 0);
							}}>
							{SubjectMenu(collegeYear, branch)}
						</Select>
					</FormControl>
				)}

				<StyledButton variant="contained" onClick={handleSearch}>
					Filter Notes
				</StyledButton>
			</SelectContainer>
		</Box>
	);
}

const SelectContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
	width: fit-content; /* Set the width based on the button's content */
	margin: 0 auto; /* Center the button horizontally */
	height: 50px;
`;
