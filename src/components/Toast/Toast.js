import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({toast, removeToast}) {
    console.log(`toast made - ${JSON.stringify(toast)}` )
    const { toastId, message, toastType} = toast;
    const IconType = ICONS_BY_VARIANT[toastType];

    return (
    <div className={`${styles.toast} ${styles[toastType]}`}>
      <div className={`${styles.iconContainer}`}>
        <IconType size={24} />
      </div>
      <p className={styles.content}>
          <VisuallyHidden>
              {`${toastType}-`}
          </VisuallyHidden>
        {message}
      </p>
      <button className={styles.closeButton} onClick={()=> removeToast(toastId)} aria-label={'Dismiss message'} aria-live={"off"}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default React.memo(Toast);
