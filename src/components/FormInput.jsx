import { forwardRef } from "react";

const FormInput = forwardRef(({ type, placeholder, onChange, label, onBlur, name, error }, ref) => {
  const errorClassLabel = error
    ? "block mb-2 mt-4 text-sm font-medium text-red-700 dark:text-red-500"
    : "block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white";
  const eras =
    "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400";
  const errorClassInput = error
    ? "bg-gray-50 border mb-1 border-gray-300 text-red-800 text-sm rounded-lg bg-red-50 focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    : "bg-gray-50 border mb-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <div>
      <label htmlFor="email" className={errorClassLabel}>
        {label}
      </label>
      <input
        className={errorClassInput}
        type={type}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
    </div>
  );
});

FormInput.displayName = "FormInput";

export default FormInput;
