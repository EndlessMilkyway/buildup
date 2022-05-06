import { useEffect, useState } from "react";

const useDetectClose = (elem: any, initialState: any) => {
    const [isOpen, setIsOpen] = useState(initialState);
    useEffect(() => {
        const onClick = (e: any) => {
            console.log(e);
            if (elem.current !== null && !elem.current.contains(e.target)) {
                setIsOpen(!isOpen);
            }
        };

        if (isOpen) {
            window.addEventListener("click", onClick);
        }

        return () => {
            window.removeEventListener("click", onClick);
        };
    }, [isOpen, elem]);
    return [isOpen, setIsOpen];
};

export default useDetectClose;
