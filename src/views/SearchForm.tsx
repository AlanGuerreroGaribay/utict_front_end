import { useState } from "react";
import {
  SearchFormContainer,
  SearchFormInputZip,
  SearchFormSelect,
} from "../components/SearchForm";
import { Button } from "../components/Button/Button";
import { SearchFormProps } from "../utils/types/form.type";
import { URL } from "../utils/api/variables";
import axios from "axios";

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("US");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${URL}${country}/${zip}`);

      const data = await response.data;
      const places = data.places;
      const state = data.places[0]["state"];

      onSearch({ zip, places, state });
    } catch (error: unknown) {
      console.log(error);
      //@ts-expect-error type uknown
      alert(error.response?.data?.error);
    }

    setZip("");
  };

  return (
    <SearchFormContainer>
      <SearchFormSelect
        country={country}
        setCountry={(e) => setCountry(e.target.value)}
      />
      <SearchFormInputZip
        zip={zip}
        setZip={(e) => {
          setZip(e.target.value);
        }}
      />
      <Button
        text="Buscar"
        className="p-2 w-[80%] bg-blue-500 text-white rounded hover:opacity-35 active:opacity-10"
        handler={() => handleSearch()}
      />
    </SearchFormContainer>
  );
};

export default SearchForm;
