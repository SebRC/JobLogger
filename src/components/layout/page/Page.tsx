import { FunctionComponent, ReactNode } from "react";
import styles from "./Page.module.css";

interface PageProps {
  children: ReactNode;
  gap?: string | number;
}

export const Page: FunctionComponent<PageProps> = ({ gap = "normal", children }) => {
  return (
    <div className={styles.container} style={{ gap: gap && gap }}>
      {children}
    </div>
  );
};
