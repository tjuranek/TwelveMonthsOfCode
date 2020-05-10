import React, { createContext, useReducer } from 'react';

const initialState = {
	links: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_LINK':
			return {
				...state,
				links: [...state.links, action.payload],
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
