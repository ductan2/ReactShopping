
import { useEffect, useRef, useState } from 'react';

export default function useClickOutside(dom = 'div') {
    const nodeRef = useRef(null);
    useEffect(() => {
        function handleClickOutSide(e) {
            if (
                (nodeRef.current && !nodeRef.current.contains(e.target) && !e,
                target.matches(dom))
            ) {
               console.log(nodeRef)
                nodeRef.current.classList.remove('active');
            }
        }
        document.addEventListener('click', handleClickOutSide);
        return () => {
            document.removeEventListener('click', handleClickOutSide);
        };
    }, []);
    return {
        nodeRef
    };
}
