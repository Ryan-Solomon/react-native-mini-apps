import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const Cocktails = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <StyledContainer>
      <StyledTextInput
        onChangeText={(text: string) => setSearchInput(text)}
        value={searchInput}
        placeholder='Search Cocktails'
      />
    </StyledContainer>
  );
};

export default Cocktails;

const StyledContainer = styled.View`
  align-items: center;
`;

const StyledTextInput = styled.TextInput`
  margin-top: 1rem;
  background: #272727;
  width: 80vw;
  padding: 0.5rem;
  color: whitesmoke;
  font-size: 1.6rem;
`;
