import React from 'react';
import { ActionsButtons } from '../style/styled';
import { LikeThisPage, Unsubscribe, Subscribe, FlushData, ResumeTracking, StopTracking } from './index';
const ActionButtons = ({ isAuth, currentPage }) => {
	return (
		<div>
			{currentPage === 'Main' && (
				<ActionsButtons>
					{isAuth && <LikeThisPage />}
					{isAuth && <Subscribe />}
					{isAuth && <Unsubscribe />}
					{isAuth && <StopTracking />}
					{isAuth && <ResumeTracking />}
					{isAuth && <FlushData />}
				</ActionsButtons>
			)}
		</div>
	);
};

export default ActionButtons;
