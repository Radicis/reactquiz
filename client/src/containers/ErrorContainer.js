import React, {useContext, useEffect} from 'react';
import {Context} from '../store/Store';

import Error from '../components/Error/Error';

function ErrorContainer() {
	const [state] = useContext(Context);
	const {error} = state;

	useEffect(() => {},[error]);

	return <Error error={error}/>;
}

export default ErrorContainer;
