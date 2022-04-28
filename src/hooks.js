import { useState } from "react";

export function useFormInput(inialvalue) {
  const [value, setValue] = useState(inialvalue);

  function handelChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handelChange,
  };
}
