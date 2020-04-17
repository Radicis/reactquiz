import React from 'react';

import Store from './store/Store';
import SocketContainer from './containers/SocketContainer';
import ErrorContainer from './containers/ErrorContainer';
import QuizContainer from './containers/QuizContainer';
import UserSetupContainer from './containers/UserSetupContainer';

function App() {
	return (
		<Store>
			<ErrorContainer />
			<SocketContainer />
			<header className="absolute text-2xl flex-grow-0 z-10 px-4 text-gray-100">
        Quiz
			</header>
			<main className="h-full text-lg relative border-l-0 border-r-0 border-gray-400 rounded bg-gray-100 md:border-r-2 md:border-l-2">
				<div className="top" />
				<div className="p-4 h-full flex flex-col">
					<UserSetupContainer />
					<QuizContainer />
				</div>
				<div className="bottom" />
			</main>
		</Store>
	);
}

export default App;
