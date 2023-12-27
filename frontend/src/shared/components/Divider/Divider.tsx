import { FC } from "react";

interface IDividerProps {
  className?: string;
}

const Divider: FC<IDividerProps> = ({ className = "" }) => <div className={`h-[1px] opacity-30 ${className}`} />;

export default Divider;
