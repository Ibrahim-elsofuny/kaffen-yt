import clsx from "clsx";
import React from "react";

export default function CustomContainer({ children, customClass }) {
    return <div className={clsx("custom-container  xl:px-16 md:px-10 px-2", customClass)}>{children}</div>;
}
