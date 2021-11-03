import React from 'react'
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../PlayList/PlayList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'searchResults': [ { 'name': 'Don\'t stop me now', 'artist': 'Queen', 'album': 'A Night at the Opera', 'id': 1 },
                                      { 'name': 'Thriller', 'artist': 'Michael Jackson', 'album': '2000', 'id': 2 },
                                      { 'name': 'Yesterday', 'artist': 'The Beatles', 'album': 'Hard Rock Cafe', 'id': 3 },
                                      { 'name': 'Bohemian Rhapsody', 'artist': 'Queen', 'album': 'A Night at the Opera', 'id': 4 },
                                      { 'name': 'I want to break free', 'artist': 'Queen', 'album': 'Greatest Hits', 'id': 5 }
                                    ]};
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
