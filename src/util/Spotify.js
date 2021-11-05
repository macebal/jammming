import CLIENTID from "./secret";
const clientId = CLIENTID;
const redirectUri = 'http://localhost:3000/';

let token;

const Spotify = {
    getAccessToken() {
        if (token) {
            return token;
        }else {
            const url = window.location.href;
            const tokenMatch = url.match(/access_token=([^&]*)/);
            const expiresInMatch = url.match(/expires_in=([^&]*)/);

            if(tokenMatch && expiresInMatch) {
                token = tokenMatch[1];
                const expiresIn = Number(expiresInMatch[1]);
                
                //This clears the parameters allowing us to grab a new access token when it expires
                window.setTimeout(() => token = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
                return token;
            }else {
                const redirectUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
                window.location = redirectUrl;
            }
        }
    },

    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, 
                {
                 headers: {Authorization: `Bearer ${accessToken}`}
                }).then(response => {
                    return response.json();
                }).then(jsonResponse => {
                    if (!jsonResponse.tracks) {
                        return [];
                    }
                    console.log(jsonResponse.tracks.items);
                    return jsonResponse.tracks.items.map(track => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                        }));
                });
    }
};

export default Spotify;