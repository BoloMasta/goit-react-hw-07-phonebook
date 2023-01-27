import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setContactsFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';
import clearIcon from '../../images/backspace.png';
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';

export const Filter = ({ inputValue }) => {
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contact by name:
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={useSelector(getFilter)}
        disabled={useSelector(getContacts).length === 0}
      />
      {useSelector(getFilter) && (
        <button
          className={css.button}
          type="button"
          onClick={() => dispatch(setContactsFilter(''))}
        >
          <img src={clearIcon} alt="clear icon" className={css.icon} />
        </button>
      )}
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
