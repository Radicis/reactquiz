import React from 'react';

import Store from './store/Store';
import QuestionContainer from './containers/QuestionContainer';

function App() {
	return (
		<Store>
			<div className="container mx-auto m-4 h-full text-gray-800 text-lg">
				<div className="p-4 border rounded h-full flex flex-col">
					<header className="text-4xl">Quiz Game <span className="text-gray-500 text-lg">Best game</span></header>
					<QuestionContainer/>
				</div>
			</div>
		</Store>
	);
}

export default App;
