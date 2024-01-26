const useThrowError = ({
  isError,
  error,
}: {
  isError: boolean;
  error: string;
}) => {
  if (isError && error) {
    throw new Error(error);
  }
};

export default useThrowError;
