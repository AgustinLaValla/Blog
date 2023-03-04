import styles from './ContextForm.module.css';
import { TextField } from './TextField';

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
