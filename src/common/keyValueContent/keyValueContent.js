import styles from './keyValueContent.module.scss';

const KeyValueContent = (props) => {

    const { text, value } = props;

    return (
        <div className={styles.keyValueContent}>
            <label className={styles.key} >{text}</label>
            <label className={styles.value}>{value}</label>
        </div>
    )
}

export default KeyValueContent;