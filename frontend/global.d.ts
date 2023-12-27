import React from "react";

declare global {
  type FCC<P = object> = React.FC<P & { children?: React.ReactNode }>;
}
