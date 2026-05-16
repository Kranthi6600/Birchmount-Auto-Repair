"use client";

import { useContext } from 'react';
import BirchmountAutoRepairContext from './BirchmountAutoRepairContext';

const useBirchmountAutoRepairContext = () => {
    const context = useContext(BirchmountAutoRepairContext);
    if (context === null) throw new Error("Context is null please try again and reload the page");

    return context;
};

export default useBirchmountAutoRepairContext;