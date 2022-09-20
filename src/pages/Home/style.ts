import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 1000px;

  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:white;

`;

export const TitleContainer = styled.h1`
  margin-top: 60px;
  margin-bottom: 20px;
  font-family: sans-serif;
  color: black;
  font-size: 28px;
`;

export const ArtistContainer = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 70px;
`;

export const NameContainer = styled.div`
  width: 300px;
  display: flex;
  margin-bottom: 10px;
`;

export const TextContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  height: 100px;
`;

export const TrackContainer = styled.div`

`;
