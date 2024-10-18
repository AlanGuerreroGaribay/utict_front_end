import { Button } from "../Button/Button";

export const SearchHistoryCleanButton = ({
  onClear,
}: {
  onClear: () => void;
}) => {
  return (
    <>
      {history.length > 0 && (
        <Button
          text="Clean the history"
          className="p-2 bg-red-500 text-white rounded hover:opacity-35 active:opacity-10"
          handler={onClear}
        />
      )}
    </>
  );
};
