import ReactDOM from 'react-dom';
import styles from './Notification.module.css'

type Props = {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending';
}

export default function Notification({ title, message, status }: Props) {

  let statusStyle = status === 'success'
    ? styles.success
    : status === 'error'
      ? styles.error :
      ''

  return ReactDOM.createPortal(
    <div className={`${styles.notification} ${statusStyle}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications') as HTMLElement
  );
}
