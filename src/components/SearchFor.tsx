import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

interface SearchForProps {
  label: string;
  onChange: (text: string) => void;
  datatestid: string;
}

/**
 * Search For
 * @component
 * @hideconstructor
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SearchFor = ({ label, onChange, datatestid }: SearchForProps) => {
  const [text, setText] = useState('');

  function onTextChange(ev: {
    target: { value: React.SetStateAction<string> };
  }) {
    setText(ev.target.value);
  }

  function onKeyDown(e: { key: string }) {
    if (e.key === 'Enter') {
      onChange(text);
    }
  }

  return (
    <TextField
      label={label}
      value={text}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
      onChange={onTextChange}
      onKeyDown={onKeyDown}
    />
  );
};

SearchFor.propTypes = {
  /**
   * Label
   */
  label: PropTypes.string.isRequired,
  /**
   * onChange Call back function
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Data Test Id
   */
  datatestid: PropTypes.string.isRequired
};

export default SearchFor;
