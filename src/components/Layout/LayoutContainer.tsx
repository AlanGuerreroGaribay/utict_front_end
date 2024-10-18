export const LayoutContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center h-[100%]">
      <div className="grid md:grid-cols-2 md:h-[60%] h-[100%] content-center  grid-cols-1">
        {children}
      </div>
    </div>
  );
};
