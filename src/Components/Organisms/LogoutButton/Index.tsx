import React from "react";
import { Avatar, Button, Menu, MenuItem, Typography } from "@mui/material";
import { DownArrowIcon, UpArrowIcon } from "Icons";
import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
	const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);

	const { logout } = useAuth0();

	const open = Boolean(anchorElement);


	const handleClose = () => {
		setAnchorElement(null);
	};


	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {


		if (!anchorElement) {
			setAnchorElement(event.currentTarget);
		} else {
			handleClose();
		}
	};
	


	return (
		<div>
			<Button
				disableRipple
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<Avatar
					sx={{
						display: "flex",
						justifyContent: "flexEnd",
						backgroundColor: "#69A6E3",
					}}
				>
					A
				</Avatar>
				{anchorElement ? (
					<UpArrowIcon sx={{ color: "#042330" }} />
				) : (
					<DownArrowIcon
						sx={{
							marginTop: "15px",
							marginLeft: "5px",
							color: "#042330",
						}}
					/>
				)}
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorElement}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
				sx={{
					justifyContent: "center",
					marginTop: "0px",
					marginLeft: "0px",
					width: "150px",
					display: "flex",
				
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				<MenuItem
					sx={{
						alignItems: "center",
						padding: "0px",
						justifyContent: "center",
						width: "100px",
						height: "50px",
						display: "flex",
						
					}}
					onClick={() => logout({ returnTo: window.location.origin })}
				>
					<Typography variant="body1">Logout</Typography>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default LogOutButton;