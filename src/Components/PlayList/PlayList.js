import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <TrackList playListName = {this.props.playListName} tracks = {this.props.playListTracks} onRemove = {this.props.onRemove} isRemoval = {true}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default PlayList;