export type ButtonType = {
  label: string | React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ label, onClick, disabled, className }: ButtonType) {
  return (
    <button
      type="button"
      className={`rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-indigo-500 transition ease-in-out delay-150 hover:border-none font-semibold tracking-wider ${
        className || ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
