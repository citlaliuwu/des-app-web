const SearchBar = ({ handleSearchChange }) => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search for an issue...'
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default SearchBar
