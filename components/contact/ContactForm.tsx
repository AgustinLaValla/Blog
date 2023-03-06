import React, { FormEvent } from 'react';
import { TextField } from './TextField';
import Notification from '../ui/Notification';
import styles from './ContextForm.module.css';
import { sendContactData } from '@/helpers/contact';
import { setNotificationPayload } from '@/helpers/notifications';

type FormData = {
  email: string;
  name: string;
  message?: string;
}


const initialState = {
  email: '',
  name: '',
  message: ''
};



export default function ContactForm() {

  const [formState, setFormState] = React.useState<FormData>(initialState);
  const [reqStatus, setReqStatus] = React.useState<'pending' | 'success' | 'error'>();
  const [reqErrorMsg, setReqErrorMsg] = React.useState<string>();

  const notificationMsg = setNotificationPayload(reqStatus, reqErrorMsg);

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = event;
    setFormState({ ...formState, [target.name]: target.value });
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    setReqStatus('pending');

    const { ok, message } = await sendContactData(formState);
    setReqErrorMsg(message);

    if (!ok) {
      setReqStatus('error');
      return;
    };

    setReqStatus('success');
    setFormState(initialState);

    setTimeout(() => {
      setReqStatus(undefined);
      setReqErrorMsg('');
    }, 2500);
  }


  return (
    <div className={styles.contact}>
      <h1>How can I help you</h1>

      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.controls}>
          <TextField
            name='email'
            type="email"
            required
            label='Your Email'
            value={formState.email}
            onChange={onChange}
          />
          <TextField
            name='name'
            required
            label='Your Name'
            value={formState.name}
            onChange={onChange}
          />
        </div>

        <TextField
          name="message"
          isTextArea
          label="Your Message"
          value={formState.message}
          onChange={onChange}
        />

        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.submit}
          >
            Send Message
          </button>
        </div>
      </form>

      {notificationMsg && <Notification {...notificationMsg} />}
    </div>
  )
}
