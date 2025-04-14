const ErrorMsg = ({ msg }: { msg: string }) => {
  return (
    msg && (
      <span className="block text-red-700 font-semibold text-sm">{msg}</span>
    )
  );
};

export default ErrorMsg;
