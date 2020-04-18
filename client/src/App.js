import React from 'react';

import Store from './store/Store';
import SocketContainer from './containers/SocketContainer';
import ErrorContainer from './containers/ErrorContainer';
import QuizContainer from './containers/QuizContainer';
import UserSetupContainer from './containers/UserSetupContainer';
import AccentContainer from './containers/AccentContainer';

function App() {
	return (
		<Store>
			<ErrorContainer />
			<SocketContainer />
			<header className="absolute text-2xl font-semibold flex-grow-0 z-10 px-4 text-gray-100 z-30">
        Quiz
			</header>
			<main className="h-full text-lg relative border-l-0 border-r-0 border-gray-400 bg-gray-100 md:border-r-2 md:border-l-2">
				<AccentContainer/>
				<div className="p-4 h-full flex flex-col">
					<UserSetupContainer />
					<QuizContainer />
				</div>
			</main>
		</Store>
	);
}

export default App;
