import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../common/CustomButton/CustomButton';

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
			<CustomButton label="OK" clickAction={() => setPlayerName(name)} faIcon={faCheck} />
		</div>
	</div>);
}

UserSetup.propTypes = {
	setPlayerName: PropTypes.func
};

export default UserSetup;
