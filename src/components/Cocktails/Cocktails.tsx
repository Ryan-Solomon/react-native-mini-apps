import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components/native';

// Types
type TDrink = {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
};

type TInitialState = {
  drinks: TDrink[];
  error: string | null;
  loading: boolean;
};

// Consts

const initialState: TInitialState = {
  drinks: [],
  error: null,
  loading: false,
};

// Reducer

// Component

const Cocktails = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getThemCocktails = async () => {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const { drinks } = await res.json();
      setData(drinks);
    };
    getThemCocktails();
  }, [searchTerm]);

  console.log(data);

  return (
    <StyledContainer>
      <StyledTextInput
        onChangeText={(text: string) => setSearchInput(text)}
        value={searchInput}
        placeholder='Search Cocktails'
      />
      <StyledSearchButton onPress={() => setSearchTerm(searchInput)}>
        <StyledSearchText>Search</StyledSearchText>
      </StyledSearchButton>
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
  width: 100vw;
  padding: 0.5rem;
  color: whitesmoke;
  font-size: 1.6rem;
`;

const StyledSearchButton = styled.TouchableOpacity`
  background: #333;
  align-self: flex-start;
  padding: 0.5rem;
`;

const StyledSearchText = styled.Text`
  color: white;
`;
