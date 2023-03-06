import { ChangeEvent } from 'react';
import styles from './ContextForm.module.css';

type TextFieldProps = {
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  isTextArea?: boolean;
  rows?: number;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const TextField = ({
  name,
  required,
  type = 'text',
  value,
  isTextArea,
  rows = 10,
  label = '',
  onChange = () => { }
}: TextFieldProps) =>
  <div className={styles.control}>
    <label htmlFor={name}>{label}</label>
    {!isTextArea
      ? <input
          type={type}
          name={name}
          id={name}
          required={required}
          value={value}
          onChange={onChange}
      />
      : <textarea
          name={name}
          id={name}
          rows={rows}
          value={value}
          onChange={onChange} ></textarea>
    }
  </div>;