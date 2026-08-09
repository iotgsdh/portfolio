import { useEffect } from "react";

type UseCssVariableProps = {
  name: string;
  value: string;
};

export function useCssVariable({ name, value }: UseCssVariableProps) {
  useEffect(() => {
    document.documentElement.style.setProperty(name, value);
  }, [name, value]);
}
