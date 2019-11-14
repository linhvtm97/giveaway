import * as Types from '../constants/ActionTypes';

var initialState = [
];

var appReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.ALL_EVENTS:
            state = action.events
            return [...state];
        default:
            return [...state];
    }

};

export default appReducers;