import React, { createContext, useReducer } from 'react';

const initialState = {
	valOne: 'valOne',
	valTwo: 'valTwo',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_VALONE':
			return {
				...state,
				valOne: action.payload,
			};
	}
};

const AppContext = createContext({});

const App = (props) => {
	const [appState, appDispatch] = useReducer(reducer, initialState);
	const value = { appState, appDispatch };

	return (
		<AppContext.Provider value={value}>
			{props.children}
		</AppContext.Provider>
	);
};

export { App, AppContext };
