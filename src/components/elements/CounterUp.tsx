"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

type CounterUpProps = {
    ending?: number;
    duration?: number;
    decimals?: number;
};

const CounterUp: React.FC<CounterUpProps> = ({
    ending = 32,
    duration = 3,
    decimals,
}) => {
    const ref = useRef<HTMLSpanElement | null>(null);

    const isInView = useInView(ref, { once: true });

    const autoDecimals =
        decimals !== undefined
            ? decimals
            : (ending.toString().split(".")[1] || "").length;

    return (
        <span ref={ref}>
            {isInView ? (
                <CountUp
                    start={0}
                    end={ending}
                    duration={duration}
                    decimals={autoDecimals}
                    separator=","
                    decimal="."
                />
            ) : (
                0
            )}
        </span>
    );
};

export default CounterUp;
