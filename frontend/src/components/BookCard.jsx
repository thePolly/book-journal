

import styles from './BookCard.module.css';
import toReadIcon from '../assets/status_to_read.png';
import readingIcon from '../assets/status_reading.png';
import finishedIcon from '../assets/status_finished.png';
import droppedIcon from '../assets/status_dropped.png';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

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
      status={book.status}
      style={{ '--cover-color': book.coverColor || '#f2f2f2' }}
    >

      <div className={styles.statusBadge}>
      <img src={statusIcon} alt={book.status} width={20} height={20} />
      </div>

      <p className={styles.author}> {book.author}</p>
      <h3 className={styles.title}>{book.title}</h3>
 
   <div className={styles.rating}>
  <Rating
    style={{ maxWidth: 140 }}
    value={book.rating || 0}
    readOnly
  />
</div>
    </div>
  );
}