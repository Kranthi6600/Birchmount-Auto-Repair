"use client";

import { createContext } from "react";
import type { contextType } from "./contextType";


const FixproContext = createContext<contextType | null>(null);

export default FixproContext;