

import styles from './BookCard.module.css';
import toReadIcon from '../assets/status_to_read.png';
import readingIcon from '../assets/status_reading.png';
import finishedIcon from '../assets/status_finished.png';
import droppedIcon from '../assets/status_dropped.png';

const statusIcons = {
  TO_READ: toReadIcon,
  READING: readingIcon,
  FINISHED: finishedIcon,
  DROPPED: droppedIcon
};

export default function BookCard({ book }) {
  const statusIcon = statusIcons[book.status] || null;

  return (
    <div
      className={styles.card}
      style={{ '--cover-color': book.coverColor || '#f2f2f2' }}
    >
      <h3 className={styles.title}>{book.title}</h3>
      <p className={styles.author}> Author: {book.author}</p>
      <p className={styles.statusRow}>
        {statusIcon && (
          <img
            src={statusIcon}
            alt={book.status}
            width={20}
            height={20}
            style={{ objectFit: 'contain' }}
          />
        )}
        <span>{book.status}</span>
      </p>
      {book.rating != null && (
        <p className={styles.rating}>Оценка: {book.rating}/5</p>
      )}
    </div>
  );
}