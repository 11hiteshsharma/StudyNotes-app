import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
	return (
		<Typography variant="body2">
			{"Copyright © "}
			<Link color="inherit" href="/">
				StudyMaterial
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function StickyFooter() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}>
			<Box
				component="footer"
				sx={{
					py: 3,
					px: 2,
					mt: "auto",
					backgroundColor: "#222327",
				}}>
				<Container maxWidth="sm">
					<Typography variant="body1">
						My sticky footer can be found here.
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
}
