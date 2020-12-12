import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components/native';

// Types
type TDrink = {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
};

type TState = {
  drinks: TDrink[];
  error: string | null;
  loading: boolean;
};

// Consts

const initialState: TState = {
  drinks: [],
  error: null,
  loading: false,
};

type TAction =
  | {
      type: 'SET_DATA';
      payload: TDrink[];
    }
  | {
      type: 'SET_LOADING';
    }
  | {
      type: 'SET_ERROR';
      payload: string;
    };

// Reducer

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        loading: false,
        error: null,
        drinks: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error('Action not supported');
  }
};

// Component

const Cocktails = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getThemCocktails = async () => {
      dispatch({ type: 'SET_LOADING' });
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const { drinks } = await res.json();
        dispatch({ type: 'SET_DATA', payload: drinks });
      } catch (e) {
        dispatch({ type: 'SET_ERROR', payload: 'Error' });
      }
    };
    getThemCocktails();
  }, [searchTerm]);

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
