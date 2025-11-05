import styles from './BookFilter.module.css';

export default function BookFilter({ filters, setFilters }) {
    return (
    <div   className={styles.filterBar}>
    <input
        className={styles.filterInput}
        type="text"
        placeholder="Search by title"
        value={filters.title}
        onChange={(e) => setFilters({ ...filters, title: e.target.value })}
    />
    <input
        className={styles.filterInput}
        type="text"
        placeholder="Search by author"
        value={filters.author}
        onChange={(e) => setFilters({ ...filters, author: e.target.value })}
    />
    <select className= {styles.filterSelect}
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
    >
        <option value="">All statuses</option>
        <option value="TO_READ">To Read</option>
        <option value="READING">Reading</option>
        <option value="FINISHED">Finished</option>
        <option value="DROPPED">Dropped</option>
    </select>

    </div>
    );
    }