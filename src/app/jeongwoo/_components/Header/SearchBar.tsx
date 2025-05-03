import SearchIcon from "@/_assets/search-icon.svg";

const SearchBar = () => {
  return (
    <div className="flex items-center w-[166px] rounded-[8px] px-3 py-2 bg-gray-100 box-border">
      <div className="flex items-center w-full">
        <input
          type="text"
          placeholder="Search"
          aria-label="search"
          className="bg-transparent outline-none text-sm w-full"
        />
        <button type="button" aria-label="search">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
