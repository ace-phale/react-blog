import './NavbarSearch.css';
//react-bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//react-router

import { useHistory } from 'react-router-dom';

//react
import { useState } from 'react';

//react-autosuggest
import Autosuggest from 'react-autosuggest';

//static
import { TAGS } from '../../static/shortcutBarStatic.js';

const NavbarSearch = () => {
  const [searchValue, setSearchVaulue] = useState('');

  const [suggestions, setSuggestions] = useState([]);
  let history = useHistory();

  //suggestions logic
  const getSuggestions = (value) => {
    const inputValue = value.toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : TAGS.filter((tag) => tag.toLowerCase().slice(0, inputLength) === inputValue);
  };
  const getSuggestionValue = (suggestion) => suggestion;
  const renderSuggestion = (suggestion) => <span>{suggestion}</span>;

  const onSuggestionsFetchRequested = ({ value }) => {
    const temp = getSuggestions(value).slice(0, 6);

    setSuggestions(temp);
  };
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleSearchInput = (e) => {
    setSearchVaulue(e.target.value);
  };
  const handleButtonClick = () => {
    history.push(`/tag/${searchValue}`);
    setSearchVaulue('');
  };
  const handleSuggestionClick = (e, { suggestion }) => {
    setSearchVaulue(suggestion);
  };
  const inputProps = {
    style: { width: '13em', color: '#e5383b' },

    className: 'form-control mr-2',
    placeholder: 'search tag',
    value: searchValue,
    onChange: handleSearchInput,
  };
  return (
    <Form className='' inline>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={handleSuggestionClick}
      />
      <Button id='searchButton' onClick={handleButtonClick} variant='outline-secondary'>
        Search
      </Button>
    </Form>
  );
};

export default NavbarSearch;
