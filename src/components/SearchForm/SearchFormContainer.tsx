export const SearchFormContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col p-4 md:space-y-4 space-y-2 items-center">
      {children}
    </div>
  );
};
