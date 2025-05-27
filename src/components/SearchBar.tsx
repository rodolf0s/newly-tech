interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search newsletters..."
        className="w-full p-3 bg-primary/80 border-2 border-secondary rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary text-tertiary placeholder-tertiary/50"
      />
    </div>
  );
};

export default SearchBar;