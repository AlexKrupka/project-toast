import React from "react";

function useEscapeKey(callback){
    React.useEffect(() => {
        console.log(`Use effect fired`)
        const escapeKeyPress = function(event) {
            console.log(`key pressed ${event.key}`)
            if (event.key === 'Escape') {
                callback()
            }
        }
        document.addEventListener('keydown', escapeKeyPress);

        return () => {
            console.log(`Removing handler`)
            document.removeEventListener('keydown', escapeKeyPress);
        }
    })
}

export default useEscapeKey