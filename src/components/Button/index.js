import clsx from 'clsx'
import styles from './Button.module.scss'

function Button({primary, disabled}) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled
    })
    return (
        <>
         <button className={classes}>Click me!</button>
        </>
    )
    //  sử dụng 1 trong 2 thư viện classnames hoặc clsx để xử lý thêm class cho các button
}

export default Button