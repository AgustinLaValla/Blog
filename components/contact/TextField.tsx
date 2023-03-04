import styles from './ContextForm.module.css';

type TextFieldProps = {
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  isTextArea?: boolean;
  rows?: number
}

export const TextField = ({ name, required, type = 'text', value, isTextArea, rows = 10 }: TextFieldProps) =>
  <div className={styles.control}>
    <label htmlFor={name}>Your Email</label>
    {!isTextArea
      ? <input type={type} name={name} id={name} required={required} />
      : <textarea name={name} id={name} rows={rows}></textarea>
    }
  </div>;