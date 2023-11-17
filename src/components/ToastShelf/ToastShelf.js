import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastsProvider";

function ToastShelf() {
    const {toasts, removeToast} = React.useContext(ToastContext)

    console.log(`${toasts.length} toasts`)

    if(!toasts?.length) {
        return
    }
    return (
        toasts.length && (<ol className={styles.wrapper}>
            {toasts.map(toast => (<li className={styles.toastWrapper}  key={toast.toastId}>
                <Toast toast={toast} removeToast={removeToast}></Toast>
            </li>))}

        </ol>)
    );
}

export default ToastShelf;
