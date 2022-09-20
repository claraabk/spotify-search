import styled from 'styled-components';

export const Container = styled.div`
    width: 590px;
    display: flex;
    position: relative;
`;

export const InputTest = styled.input`
    width: 478px;
    height: 56px;
    background-color: #F5F5F5;
    border-radius: 25px;
    border: none;
    padding-left: 20px;
    font-size: 16px;
    color: #979797;
    position: absolute;
    z-index: 2;
    font-family: sans-serif;
`;

export const SearchButton = styled.button`
  width: 164px;
  height: 55px;
  border-radius: 25px;
  background-image: radial-gradient(circle at 23px 28px,  white, white 40px, rgba(0, 163, 255, 0.2) 40px);
  color: #FFF;
  border: none;
  position: absolute;
  left: 420px;
  z-index: 1;
  color: #00A3FF;
  font-weight: 600;
  font-size: 15px;
  font-family: sans-serif;
  padding-left: 43px;

  :hover {
    background-image: radial-gradient(circle at 23px 28px,  white, white 40px, #00A3FF 40px);
    color: white;
  };
`;
