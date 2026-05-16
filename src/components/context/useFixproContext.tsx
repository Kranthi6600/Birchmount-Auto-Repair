"use client";

import { useContext } from 'react';
import FixproContext from './FixproContext';

const useFixproContext = () => {
    const context = useContext(FixproContext);
    if (context === null) throw new Error("Context is null please try again and reload the page");

    return context;
};

export default useFixproContext;