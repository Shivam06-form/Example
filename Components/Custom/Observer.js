import { useEffect, useState } from "react";

export const Observer = ({ RefProp }) => {
    const [show, setShow] = useState(false);

    const revelSection = function (entries, observer) {
        const [entry] = entries;

        if (entry.isIntersecting) {
            setShow(true);
        }
    };

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(revelSection, {
            root: null,
            threshold: 0.15,
        });
        if (RefProp) {
            sectionObserver.observe(RefProp.current);
        }
    }, [RefProp]);

    return {
        RefProp: RefProp,
        show: show,
    };
};
