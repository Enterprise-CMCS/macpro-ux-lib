import React, { ReactElement } from "react";
import { Radio, RadioProps } from "../Radio/Radio";

interface Props {
  groupName: string;
  radioProps: RadioProps[];
}

export const RadioGroup: React.FC<Props> = ({ groupName, radioProps }) => {
  // Track which Radio is currently selected in order to show/hide child elements:
  const [selected, setSelected] = React.useState("");
  const handleChange = (e: React.ChangeEvent) => {
    setSelected(e.target.id);
  };

  // Create Radio components for the RadioGroup based `radioProps`:
  const radioButtons = (radioProps: RadioProps[]): ReactElement[] => {
    let radios: ReactElement[] = [];

    for (var props of radioProps) {
      radios.push(
        <>
          <Radio onChange={handleChange} name={groupName} {...props} />
          {props.id === selected && props.children && (
            <div className="border-left-05 border-primary margin-left-1 padding-left-205">
              {props.children}
            </div>
          )}
        </>
      );
    }

    return radios;
  };

  return <>{radioButtons(radioProps)}</>;
};
