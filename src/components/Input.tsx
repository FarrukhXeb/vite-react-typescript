import React from 'react';

export type InputType = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
function Input({ label, value, onChange, className, name, type }: InputType) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={className || ''}
      />
    </div>
  );
}

export default Input;
