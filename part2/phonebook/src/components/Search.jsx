const Search = ({ onChange }) => {
  return (
    <form>
      <div>
        {' '}
        filter shown with: <input type='text' onChange={onChange} />
      </div>
    </form>
  );
};
export default Search;
