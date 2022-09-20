/* eslint-disable react/jsx-indent */
import React, { Dispatch, SetStateAction } from 'react';
import { InputTest, SearchButton, Container } from './style';

interface InputProps {
    onChangeText: any;
    onClick: any;
}

export const InputComponent = ({ onChangeText, onClick }: InputProps) => (
    <Container>
        <InputTest type="text" placeholder="Search whatever you want..." onChange={onChangeText} />
        <SearchButton onClick={onClick}>SEARCH</SearchButton>
    </Container>
);

export default InputComponent;
