import * as Types from "./../constants/ActionTypes";
import callApi from "./../untils/apiCaller";
//events
export const actFetchEventsRequest = () => {
    return (dispatch) => {
        return callApi('events', "GET", null).then(res => {
            console.log(res);
            
            // dispatch(actFetchEvents(res.data));
        });
    };
}

export const actFetchEvents = (events) => {
    return {
        type: Types.ALL_EVENTS,
        events
    }
}