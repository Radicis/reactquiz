import React from 'react';

import Store from './store/Store';
import QuestionContainer from './containers/QuestionContainer';
import SocketContainer from './containers/SocketContainer';
import OwnerControlsContainer from './containers/OwnerControlsContainer';
import PlayersContainer from './containers/PlayersContainer';
import ErrorContainer from './containers/ErrorContainer';
import UserSetupContainer from './containers/UserSetupContainer';
import AnswerContainer from './containers/AnswerContainer';

function App() {
	return (
		<Store>
			<ErrorContainer/>
			<UserSetupContainer/>
			<main className="container mx-auto m-4 h-full text-gray-800 text-lg">
				<div className="p-4 border rounded h-full flex flex-col">
					<header className="text-4xl">Quiz Game <span className="text-gray-500 text-lg">Best game</span></header>
					<SocketContainer />
					<QuestionContainer/>
					<AnswerContainer/>
					<PlayersContainer/>
					<OwnerControlsContainer/>
				</div>
			</main>
		</Store>
	);
}

export default App;
