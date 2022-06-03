import React from "react";
import { Container, Button, Typography, ThemeProvider, Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import theme from "../../Components/Theme/Theme";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
	center: {
		display: "flex",
		justifyContent: "center",
		marginBottom: "20px !important",
	},
	headText: {
		display: "flex",
		justifyContent: "center",
		margin: "20px auto",
	},
	imgStyles: {
		height: "40px",
		width: "180px",
		
	},
	imgContainer: {
		display: "flex !important",
		justifyContent: "center !important",
		alignItems: "center",
		marginBottom: "10px",
	}
})

const LoginPage = () => {
	const classes = useStyles();
	const { loginWithRedirect } = useAuth0();

	return (
		<ThemeProvider theme={theme}>
		<Container
			maxWidth="sm"
			sx={{
				height: "500px",
				width: "500px",
				backgroundColor: "#E2F2E9",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				position: "relative",
				top: "100px",
			}}
		>
			<Box className={classes.imgContainer}>

			<img className={classes.imgStyles} src="Images/logo.png" alt="logo" />
			</Box>
			<Typography className={classes.headText} variant="h1" align="center">
				Welcome To Blinkist
			</Typography>

			<br />
			<Button
				variant="contained"
				color="primary"
				onClick={() => loginWithRedirect({ screen_hint: "signup" })}
			>
				Sign Up
			</Button>
			<br />
			<Typography className={classes.center} variant="body1">Already a user? Login</Typography>
			
			<Button
				variant="contained"
				color="primary"
				onClick={() => loginWithRedirect()}
			>
				Log In
			</Button>
		</Container>
		</ThemeProvider>
	);
};

export default LoginPage;