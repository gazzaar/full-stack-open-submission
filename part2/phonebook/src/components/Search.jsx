const Search = ({ onChange }) => {
  return (
    <form>
      <div>
        {' '}
        <label htmlFor='filter'>Filter shown with:</label>{' '}
        <input type='text' id='filter' onChange={onChange} />
      </div>
    </form>
  );
};
export default Search;
