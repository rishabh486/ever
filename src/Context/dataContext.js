import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [callData, setCallData] = useState([]);

  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://everbee-web-dev-ext.herokuapp.com/listing?limit=20&offset=10"
      );
      console.log(response);
      const responseData = [...response.data.data];
      setCallData((previous) => (previous = responseData));
    } catch (e) {
      console.log(e.response);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <DataContext.Provider value={{ callData }}>{children}</DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
