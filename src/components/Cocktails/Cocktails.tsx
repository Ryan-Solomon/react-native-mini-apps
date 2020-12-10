import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

const Cocktails = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getThemCocktails = async () => {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await res.json();
    };
  });

  // Add a button to update search term
  // Then, search api based on search term and show results

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
