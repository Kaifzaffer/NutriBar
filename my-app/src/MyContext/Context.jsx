import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const handleApiCall = (newValue) => {
    fetchData(newValue)
  };

  // 3017624010701
    const fetchData = async (value) => {
      try {
        console.log('runnnn');
        const response = await axios.get(
          `https://world.openfoodfacts.net/api/v2/product/${value}`
        );
        console.log("Data fetched successfully:", response.data);
        setData(response.data);
        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  return (
    <DataContext.Provider value={{ data,handleApiCall }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
