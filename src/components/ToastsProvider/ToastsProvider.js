import React from 'react';
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext()

function ToastsProvider({children}) {
    const [toasts, setToasts] = React.useState([])

    useEscapeKey(() => {
        setToasts([]);
    },[setToasts])


    const makeToast = (message, toastType) => {
        const newToast = {
            message: message,
            toastType: toastType,
            toastId: Math.random(),
        }
        console.log(newToast)
        setToasts([...toasts, newToast])
    }

    const removeToast = React.useCallback((id) => {
        setToasts((current) => {
            const toastsCopy = current.filter(t => t.toastId !== id);
            console.log(`Removing toast with ${id}, ${toastsCopy.length} left`);
            setToasts(toastsCopy)
        })
    }, [])

    return (
        <ToastContext.Provider value={{toasts, setToasts, removeToast, makeToast }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastsProvider;
