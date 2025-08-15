"use client"

import { useState, useEffect } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    // should use this when ur component needs any browser only APIs,
    // or content is dynamic and user-specific (access token, cookies, etc) 
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <>
          Modals!
        </>
    );
}

export default ModalProvider;