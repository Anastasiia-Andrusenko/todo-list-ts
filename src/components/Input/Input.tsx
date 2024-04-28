import css from './Input.module.css'; 

interface IInputProps {
  labelText: string;
  inputName: string;
  inputType?: string;
  inputValue?: string;
  required?: boolean; 
  };

export   const Input: React.FC<IInputProps> = ({
  labelText,
  inputName,
  inputType = 'text',
  inputValue,
  required = false, 
}) => {
  return (
    <div className={css.inputContainer}>
      <label  className={css.label} htmlFor={inputName}>{labelText}</label>
      <input
        className={css.input}
        type={inputType}
        id={inputName}
        name={inputName}
        defaultValue={inputValue}
        required={required} 
      />
    </div>
  );
};