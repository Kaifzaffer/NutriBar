import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MyTable from "./MyTable";
import { useData } from "../MyContext/Context";

const Search = () => {
  const [value, setValue] = useState(null);
  const { handleApiCall } = useData();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleSearch = () => {
    handleApiCall(value);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-2/4">
        <div className="relative w-1/3">
          <input
            type="text"
            className="border-inherit shadow-lg border-2 focus:outline-none w-full p-2 pr-10"
            placeholder="Enter the barcode eg. 3129083"
            value={value}
          // value={3017624010701}
            onChange={handleInputChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SearchIcon />
          </div>
        </div>
        <button
          type="submit"
          className="border-2 p-2 ml-1.5 shadow-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <MyTable />
    </div>
  );
};

export default Search;
