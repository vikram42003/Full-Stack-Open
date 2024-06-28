const Searchbar = ({ text, searchQuery, setSearchQuery }) => {
  return (
    <div>
      {text} &nbsp;&nbsp;
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
