import React from 'react'

import './App.css';

import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
                  searchResults: [],
                  playListName: 'New PlayList',
                  playlistTracks: []
                  };
    
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {

    let tracks = this.state.playlistTracks;
    
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks : tracks});
  }

  removeTrack(track) {
    
    let tracks = this.state.playlistTracks;

    let filteredTracks = tracks.filter(savedTrack => savedTrack.id !== track.id); //returns all the tracks except the removed track

    this.setState({playlistTracks : filteredTracks});

  }

  updatePlaylistName(newName) {
      this.setState({playListName : newName});   
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlayList(this.state.playListName, trackUris).then(() => {
      this.setState({
        playListName: 'New PlayList',
        playlistTracks: []
      })
    });
  }

  search(terms) {
    Spotify.search(terms).then(results => {
      this.setState({searchResults: results});
    });
    
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar  onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <PlayList playListName={this.state.playListName} 
                      playListTracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack} 
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist}
                      />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
