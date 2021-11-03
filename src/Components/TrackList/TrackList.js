import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.searchResults.map(track => <Track track={track} key={track.id}/>)}
            </div>
        );
    }
}

export default TrackList;