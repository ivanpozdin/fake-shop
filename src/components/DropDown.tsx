import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Panel from "./Panel";
import type DropdownOption from "../types/DropdownOption";

interface DropdownProps<K> {
  options: DropdownOption<K>[];
  value: DropdownOption<K>;
  onChange: (option: DropdownOption<K>) => void;
}

export default function DropDown<K>({
  options,
  value,
  onChange,
}: DropdownProps<K>) {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef<HTMLDivElement | undefined>();

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (event.target instanceof Node) {
        const targetNode = event.target as Node;
        if (!divElement.current || divElement.current.contains(targetNode)) {
          return;
        }
      }
      setIsOpen(false);
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleOptionClick = (option: DropdownOption<K>) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOption = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.label}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const currentSelected = value?.label || "Select...";

  return (
    <div ref={divElement} className="w-44 relative">
      <Panel
        className="drop-down-title flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <>{currentSelected}</>
        {isOpen ? (
          <GoChevronUp className="text-lg" />
        ) : (
          <GoChevronDown className="text-lg" />
        )}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOption}</Panel>}
    </div>
  );
}
