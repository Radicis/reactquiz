import React from 'react';

import Store from './store/Store';
import QuestionContainer from './containers/QuestionContainer';
import SocketContainer from './containers/SocketContainer';
import OwnerControlsContainer from './containers/OwnerControlsContainer';
import PlayersContainer from './containers/PlayersContainer';
import ErrorContainer from './containers/ErrorContainer';
// import UserSetupContainer from './containers/UserSetupContainer';
import AnswerContainer from './containers/AnswerContainer';

function App() {
	return (
		<Store>
			<ErrorContainer/>
			{/*<UserSetupContainer/>*/}
			<SocketContainer />
			<main className="container mx-auto h-full text-lg">
				<div className="p-4 h-full flex flex-col">
					<header className="text-2xl flex-grow-0 mb-2">Quiz Game <span className="text-gray-500 text-lg">Best game</span></header>
					<div className="flex flex-grow">
						<QuestionContainer/>
					</div>
					<div className="flex flex-col">
						<AnswerContainer/>
						<PlayersContainer/>
						<OwnerControlsContainer/>
					</div>
				</div>
			</main>
		</Store>
	);
}

export default App;
