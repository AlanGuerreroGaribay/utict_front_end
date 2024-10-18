import { HistoryProps } from "../../utils/types/history.type";

export const SearchHistoryList = ({ history }: { history: HistoryProps[] }) => {
  return (
    <>
      {history.length === 0 ? (
        <p>There is not current searching.</p>
      ) : (
        <ul className="w-[90%] max-h-[70%] space-y-2 overflow-auto md:mb-8 mb-4">
          {history.map((item, index) => (
            <li key={index} className="border rounded-md p-2">
              <span className="font-semibold">Zip code: </span>{" "}
              <p>{item.zip}</p>
              <span className="font-semibold">Places / Addresses:</span>
              {item.places.map((place, i) => (
                <p key={i}>{`${i + 1}) ${place["place name"]}`}</p>
              ))}
              <span className="font-semibold">State:</span>
              <p>{item.state}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
