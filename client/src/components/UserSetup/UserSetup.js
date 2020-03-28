import React, {useState} from 'react';
import PropTypes from 'prop-types';

function UserSetup(props) {
	const [name, setName] = useState('');

	const handleInputChange = e => {
		const {value} = e.target;
		setName(value);
	};

	const {setPlayerName} = props;

	return (<div className="flex flex-col fixed top-0 left-0 h-full w-full bg-gray-100">
		<div>Set Your Name</div>
		<div>
			<input type="text" value={name} onChange={handleInputChange} />
			<button onClick={() => setPlayerName(name)}>OK</button>
		</div>
	</div>);
}

UserSetup.propTypes = {
	setPlayerName: PropTypes.func
};

export default UserSetup;
