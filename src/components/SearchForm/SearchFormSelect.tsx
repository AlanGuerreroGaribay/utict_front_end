import { countryList } from "../../utils/data/selectors.data";

export const SearchFormSelect = ({
  country,
  setCountry,
}: {
  country: string;
  setCountry: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <div className="w-[80%] flex flex-col">
      <label htmlFor="country" className="block mb-1 font-semibold">
        Country:
      </label>
      <select
        id="country"
        data-testid="country-select"
        value={country}
        onChange={setCountry}
        className="md:p-2 border rounded py-1"
      >
        {countryList.map((country) => (
          <option key={country.abbreviation} value={country.abbreviation}>
            {country.country}
          </option>
        ))}
      </select>
    </div>
  );
};
