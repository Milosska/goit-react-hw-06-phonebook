import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={handleFilter} />
    </Label>
  );
};
