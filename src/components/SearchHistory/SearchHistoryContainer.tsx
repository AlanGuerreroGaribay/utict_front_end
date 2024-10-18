export const SearchHistoryContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center overflow-auto">{children}</div>
  );
};
