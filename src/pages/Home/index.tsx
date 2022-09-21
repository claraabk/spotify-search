import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container, TitleContainer, ArtistContainer, TextContainer, NameContainer,
} from './style';
import { InputComponent } from '../../components';
import { SpotifyLogo } from '../../assets';

interface Followers {
  href?: string;
  total?: number;
}

interface Images {
  url?: string;
}
interface Artist {
  name?: string;
  followers?: Followers;
  genres: string[];
  images: Images[];
  popularity?: number;
  uri?: string;
}

interface Album {
  name?: string;
}

interface Track {
  album?: Album;
  artists?: Artist[];
  duration_ms?: number;
  popularity?: number;
  href?: string;
}

export const Home: React.FC = () => {
  const clientId = '899fe8f30b504396b2bb87608bb8dc72';
  const redirectUri = 'https://spotify-search-livid.vercel.app/';
  const authRoute = 'https://accounts.spotify.com/authorize';
  const resType = 'token';

  const [fixedToken, setFixedToken] = useState('');
  const [artist, setArtist] = useState<string>('');
  const [artistResponse, setArtistResponse] = useState<Artist>();
  const [track, setTrack] = useState<string>('');
  const [trackResponse, setTrackResponse] = useState<Track>();

  useEffect(() => {
    const { hash } = window.location;
    let token: any = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash.substring(1).split('&').find((elm) => elm.startsWith('access_token'))?.split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setFixedToken(token);
  }, []);

  const searchArtist = async () => {
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${fixedToken}`,
      },

      params: {
        q: artist,
        type: 'artist',
      },
    });

    setArtistResponse(data.artists.items[0]);
  };

  const searchTrack = async () => {
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${fixedToken}`,
      },

      params: {
        q: track,
        type: 'track',
      },
    });

    console.log(data.tracks.items[0]);
    setTrackResponse(data.tracks.items[0]);
  };

  return (
    <>
      <Container>
        <img
          src={SpotifyLogo}
          alt="spotify logo"
          style={{
            width: '32px', position: 'absolute', top: '60px', left: '500px',
          }}
        />
        <TitleContainer>SPOTIFY.SEARCH</TitleContainer>
        <a
          href={`${authRoute}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${resType}`}
          style={{
            marginBottom: '20px', textDecoration: 'none', backgroundColor: 'rgba(0, 163, 255, 0.2)', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '25px', color: '#00A3FF', fontWeight: 4,
          }}
        >
          Login!
        </a>
        <InputComponent
          onChangeText={(value: any) => setArtist(value.target.value)}
          onClick={() => searchArtist()}
        />

        {artistResponse && (
          <ArtistContainer>
            <img src={artistResponse.images[0].url} alt="artist profile pic" width="300px" />
            <TextContainer>
              <NameContainer>
                <h2 style={{ color: 'black', fontFamily: 'sans-serif' }}>{artistResponse.name}</h2>
              </NameContainer>
              <h3 style={{
                color: 'black', fontFamily: 'sans-serif', marginRight: '5px', marginBottom: '10px',
              }}
              >
                Followers:
              </h3>
              <h3 style={{ fontFamily: 'sans-serif', marginRight: '60px', color: '#373737' }}>{artistResponse.followers?.total}</h3>
              <h3 style={{
                color: 'black', fontFamily: 'sans-serif', marginRight: '5px',
              }}
              >
                Gêneros:
              </h3>
              <h3 style={{ marginBottom: '10px', color: '#373737' }}>{`${artistResponse.genres[0]}, ${artistResponse.genres[1]}, ${artistResponse.genres[2]}`}</h3>
              <h3 style={{ color: 'black', fontFamily: 'sans-serif', marginRight: '5px' }}>Popularity: </h3>
              <h3 style={{ color: '#373737' }}>{artistResponse.popularity}</h3>
            </TextContainer>
          </ArtistContainer>
        )}

        {/*  <InputComponent
          onChangeText={(value: any) => setTrack(value.target.value)}
          onClick={() => searchTrack()}
        /> */}

        {trackResponse && (
          <ArtistContainer>
            <h2>{trackResponse.album}</h2>
          </ArtistContainer>
        )}
      </Container>
    </>
  );
};
