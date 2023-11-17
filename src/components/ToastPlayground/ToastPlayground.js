import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {

    const [toasts, setToasts] = React.useState([])
    const [message, setMessage] = React.useState()
    const [toastType, setToastType] = React.useState(VARIANT_OPTIONS[0]);
    const MakeToast = (e) => {
        const newToast = {
            message: message,
            toastType: toastType,
            toast_id: Math.random(),
        }
        console.log(newToast)
        setToasts([...toasts, newToast])
    }

    const removeToast = (index) => {
        const toastCopy = [...toasts];
        setToasts(toastCopy.filter(t => t !== index))
    }
    return (<div className={styles.wrapper}>
        <header>
            <img alt="Cute toast mascot" src="/toast.png"/>
            <h1>Toast Playground</h1>
        </header>

        <div className={styles.controlsWrapper}>
            <div className={styles.row}>
                <label
                    htmlFor="message"
                    className={styles.label}
                    style={{alignSelf: 'baseline'}}
                >
                    Message
                </label>
                <div className={styles.inputWrapper}>
                    <textarea id="message" className={styles.messageInput} onChange={(e) => {
                        setMessage(e.target.value);
                    }}/>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.label}>Variant</div>
                <div
                    className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                >
                    {VARIANT_OPTIONS.map(variant => {
                        return (<label htmlFor={`variant-${variant}`} key={`variantId-${variant}`}
                                       onChange={(e) => setToastType(e.target.value)}>
                            <input
                                id={`variant-${variant}`}
                                type="radio"
                                name="variant"
                                value={variant}
                                checked={toastType === variant}
                            /> {variant}
                        </label>)
                    })

                    }

                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.label}/>
                <div
                    className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                >
                    <Button onClick={MakeToast}>Pop Toast!</Button>
                </div>
            </div>
        </div>
        {toasts.map((toast, index) => {
            return (<Toast toast={toast} dismissToast={() => removeToast(toast)}></Toast>)
        })}
    </div>);
}

export default ToastPlayground;
