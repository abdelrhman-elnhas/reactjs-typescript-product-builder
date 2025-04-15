const ErrorMsg = ({ msg }: { msg: string }) => {
  return (
    msg && (
      <span className="block text-xs font-semibold text-red-700">{msg}</span>
    )
  );
};

export default ErrorMsg;
