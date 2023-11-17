import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";
import {ToastContext} from "../ToastsProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {

    const { makeToast} = React.useContext(ToastContext)
    const [message, setMessage] = React.useState()
    const [toastType, setToastType] = React.useState(VARIANT_OPTIONS[0]);

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
                                       >
                            <input
                                id={`variant-${variant}`}
                                type="radio"
                                name="variant"
                                value={variant}
                                checked={toastType === variant}
                                onChange={(e) => setToastType(e.target.value)}
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
                    <Button onClick={() => makeToast(message,toastType)}>Pop Toast!</Button>
                </div>
            </div>
        </div>
        <ToastShelf />
    </div>);
}

export default ToastPlayground;
