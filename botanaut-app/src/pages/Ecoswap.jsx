import { useEffect, useState } from 'react';
import { supabaseEco } from '../supabaseEco';
import Navbar from '../components/Navbar';

export default function EcoSwap() {
  const [swaps, setSwaps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [swapTotal, setSwapTotal] = useState(0);
  const [selectedSwap, setSelectedSwap] = useState(null);

  const fetchSwaps = async (search) => {
    setLoading(true);

    const normalizedSearch = search.trim().toLowerCase();
    const singularSearch = normalizedSearch.endsWith('s')
      ? normalizedSearch.slice(0, -1)
      : normalizedSearch;

    const { data, error } = await supabaseEco
      .from('eco alternatives')
      .select('*')
      .or(`item_name.ilike.%${normalizedSearch}%,item_name.ilike.%${singularSearch}%`);

    if (error) {
      console.error('Error fetching swaps:', error);
      setSwaps([]);
    } else {
      setSwaps(data);
    }

    setLoading(false);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      fetchSwaps(searchTerm);
    }
  };

  const handleSelectSwap = (swap) => {
    setSelectedSwap(swap);
  };

  const handleAddToShoppingList = () => {
    if (selectedSwap && !shoppingList.find(item => item.id === selectedSwap.id)) {
      setShoppingList([...shoppingList, selectedSwap]);
      setSwapTotal(prev => prev + 1);
    }
  };

  return (
    <div className="ecoswap-bg">
      <Navbar />

      {/* Top Section */}
      <div className="ecoswap-1">
        {/* Swap Counter */}
        <div className="swap-total">
          Total Swaps Saved: {swapTotal}
        </div>

        {/* Welcome Paragraph */}
        <p>
          Welcome to <strong>ECOSWAP</strong>, your personal sustainability guide. Every product we use has a story—how it was made, how much water it used, how much carbon it released. Type in what you use daily, and we’ll show you smarter swaps that reduce greenhouse gases, save water, and cut down on plastic waste. Your actions matter. Make each swap count.
        </p>

        {/* Search Input + Button */}
        <div className="ecoswap-search-input">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ecoswap-search-bar"
          />
          <button
            onClick={handleSearch}
            className="ecoswap-button"
          >
            Search
          </button>
        </div>

        {/* Down Arrow */}
        <img className="down-arrow" src="/images/down-arrow.svg" alt="Scroll down" />
      </div>

      {/* Swap Results */}
      {loading ? (
        <p>Loading swaps...</p>
      ) : swaps.length === 0 ? (
        <p>No swaps found for "{searchTerm}".</p>
      ) : (
        <div className="ecoswap-results-container">
          {/* Left: Options */}
          <div className="ecoswap-options-list">
            {swaps.map((swap) => (
              <div
                key={swap.id}
                className={`ecoswap-card ${selectedSwap?.id === swap.id ? 'selected' : ''}`}
                onClick={() => handleSelectSwap(swap)}
              >
                <h4>{swap.eco_alternative}</h4>
                <p>{swap.description}</p>
              </div>
            ))}
          </div>

          {/* Right: Selected Swap */}
          <div className="ecoswap-selected-display">
            {selectedSwap ? (
              <>
                {selectedSwap.image_url && (
                  <img
                    src={selectedSwap.image_url}
                    alt={selectedSwap.eco_alternative}
                    className="selected-swap-image"
                  />
                )}
                <button
                  onClick={handleAddToShoppingList}
                  className="add-to-shopping-list-button"
                >
                  Add to Shopping List
                </button>
              </>
            ) : (
              <p>Select an alternative to view it!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
