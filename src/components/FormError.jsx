const FormError = ({ error }) => {
  return (
    <>
      {error && (
        <p className=" text-sm text-red-600 dark:text-red-500 mb-4">
          <span className="font-medium">Oops! </span> {error.message}
        </p>
      )}
    </>
  );
};

export default FormError;
