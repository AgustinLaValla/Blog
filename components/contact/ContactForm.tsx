import styles from './ContextForm.module.css';

type TextFieldProps = {
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  isTextArea?: boolean;
  rows?: number
}

const TextField = ({ name, required, type = 'text', value, isTextArea, rows = 10 }: TextFieldProps) =>
  <div className={styles.control}>
    <label htmlFor={name}>Your Email</label>
    {!isTextArea
      ? <input type={type} name={name} id={name} required={required} />
      : <textarea name={name} id={name} rows={rows}></textarea>
    }
  </div>;


export default function ContactForm() {
  return (
    <div className={styles.contact}>
      <h1>How can I help you</h1>

      <form className={styles.form}>
        <div className={styles.controls}>
          <TextField name='email' type="email" required />
          <TextField name='name' required />
        </div>

        <TextField name="message" isTextArea />

        <div className={styles.actions}>
          <button className={styles.submit}>Send Message</button>
        </div>
      </form>
    </div>
  )
}
