import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
    }

    render() {
        return (
            <div className="Playlist" onChange={this.handleNameChange}>
                <input defaultValue={'New Playlist'}/>
                <TrackList playListName = {this.props.playListName} tracks = {this.props.playListTracks} onRemove = {this.props.onRemove} isRemoval = {true}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default PlayList;