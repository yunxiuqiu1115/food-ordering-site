import React from 'react';
import { SubtitleText, LoginContainer } from '../style/styled';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Login = ({ label, onLogin }) => {
	const [name, setName] = React.useState('Name');
	const [open, setOpen] = React.useState(false);

	const handleSubmit = (name) => {
		onLogin();
		window.dataLayer.push({
			event: 'Login',
			user: name,
			timezone: 'Chicago',
		});
		window.localStorage.setItem('userID', name);
		window.localStorage.setItem('isAuth', true);
		setOpen(false);
	};
	return (
		<div>
			<LoginContainer>
				<SubtitleText
					onClick={() => {
						setOpen(true);
					}}
				>
					{label}
				</SubtitleText>

				<Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Login</DialogTitle>
					<DialogContent>
						<DialogContentText>Please enter your user id here:</DialogContentText>
						<TextField
							autoFocus
							onChange={(event) => {
								setName(event.target.value);
							}}
							margin="dense"
							id="name"
							label="New User ID"
							type="text"
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setOpen(false)} color="primary">
							Cancel
						</Button>
						<Button onClick={() => handleSubmit(name)} color="primary">
							Submit
						</Button>
					</DialogActions>
				</Dialog>
			</LoginContainer>
		</div>
	);
};

export default Login;
