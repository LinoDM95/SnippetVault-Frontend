import { Children } from "react";

const FormBase = ({ children }) => {

  return (
      <form className="flex flex-col p-4 w-auto h-auto rounded-2xl space-y-4">
        {children}
      </form>
  );
};

export default FormBase;
