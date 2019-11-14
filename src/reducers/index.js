import { combineReducers } from 'redux';
import events from './events';

const appReducers = combineReducers({
    events: events
});
export default appReducers;