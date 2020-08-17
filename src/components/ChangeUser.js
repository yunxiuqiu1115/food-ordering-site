import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { SubtitleText } from '../style/styled';

const ChangeUser = () => {
	const [name, setName] = React.useState('Name');
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event) => {
		setName(event.target.value);
	};

	const handleSubmit = (name) => {
		window.localStorage.setItem('userID', name);
		setOpen(false);
	};

	return (
		<div>
			<SubtitleText onClick={handleClickOpen}>Change User</SubtitleText>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Login</DialogTitle>
				<DialogContent>
					<DialogContentText>Please enter your user id here:</DialogContentText>
					<TextField
						autoFocus
						onChange={handleChange}
						margin="dense"
						id="name"
						label="New User ID"
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={() => handleSubmit(name)} color="primary">
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ChangeUser;
