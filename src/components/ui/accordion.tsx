import React, { useState } from "react";
import type { HTMLAttributes } from "react";

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
}

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

type AccordionTriggerProps = HTMLAttributes<HTMLButtonElement>;

type AccordionContentProps = HTMLAttributes<HTMLDivElement>;

const AccordionContext = React.createContext<{
  openItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}>({
  openItems: [],
  toggleItem: () => {},
  type: "single",
});

const Accordion = ({ type = "single", collapsible = false, children, className = "", ...props }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? (collapsible ? [] : openItems) : [value]);
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ value, children, className = "", ...props }: AccordionItemProps) => {
  return (
    <div className={`border-b ${className}`} data-value={value} {...props}>
      {children}
    </div>
  );
};

const AccordionTrigger = ({ children, className = "", ...props }: AccordionTriggerProps) => {
  return (
    <button
      className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const AccordionContent = ({ children, className = "", ...props }: AccordionContentProps) => {
  return (
    <div className={`pb-4 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };