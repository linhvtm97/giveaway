import React from 'react';
import { connect } from 'react-redux';
import { actFetchEventsRequest } from "./../../actions/index";
import { Link } from 'react-router-dom';
import Events from '../../components/events/Events';
import EventItem from '../../components/events/EventItem';



class EventListPage extends React.Component {
    componentDidMount() {
        this.props.fetchAllEvents();
    }

    render() {
        var { events } = this.props;
        console.log(events);
        
        return (
            <Events>
                {this.showEvents(events)}
            </Events>
        );
    }
    showEvents = (events) => {
        var result = null;
        if (events.length > 0) {
            result = events.map((event, index) => {
                return (
                    <EventItem
                        key={index}
                        event={event}
                        index={index}
                    />
                );

            });
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return {
        events: state.events,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllEvents: () => {
            console.log('dsadsadsa');
            
            dispatch(actFetchEventsRequest());
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListPage);
