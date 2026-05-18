"use client";

import { createContext } from "react";
import type { contextType } from "./contextType";


const BirchmountAutoRepairContext = createContext<contextType | null>(null);

export default BirchmountAutoRepairContext;