export const SearchFormInputZip = ({
  zip,
  setZip,
}: {
  zip: string;
  setZip: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="w-[80%] flex flex-col">
      <label htmlFor="zip" className="block mb-1 font-semibold">
        Zip code:
      </label>
      <input
        id="zip"
        data-testid="zip-select"
        type="text"
        value={zip}
        onChange={setZip}
        className="p-2 border rounded"
        placeholder="Add a zip code"
      />
    </div>
  );
};
