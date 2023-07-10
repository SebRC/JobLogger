import { FunctionComponent, ReactNode } from "react";

interface TabContentProps {
  value: number;
  index: number;
  children: ReactNode;
}

export const TabContent: FunctionComponent<TabContentProps> = ({ value, index, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && children}
    </div>
  );
};
