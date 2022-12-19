import clsx from 'clsx'
import styles from './Heading.module.css'

function Heading() {
    return (
        <>
        <h1 className={styles.heading}> Hello anh em F8</h1>
        <button className={styles.btn}>Click me!</button>
        <button className={
            //`${styles.btn} ${styles.active}`
            //[styles.btn, styles.active].join(' ')
            clsx(styles.btn, {
                [styles.active]: true
            })
            }>Click me!</button>
        </>
    )
    //  sử dụng 1 trong 2 thư viện classnames hoặc clsx để xử lý thêm class cho các button
}

export default Heading