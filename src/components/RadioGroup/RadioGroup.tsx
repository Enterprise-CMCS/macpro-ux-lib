import React, { ReactElement, ReactNode } from "react";
import { Radio, RadioProps } from "../Radio/Radio";

interface Props {
  groupName: string;
  radioProps: RadioProps[];
}

export const RadioGroup: React.FC<Props> = ({ groupName, radioProps }) => {
  const [selected, setSelected] = React.useState("");
  const handleChange = (e: React.ChangeEvent) => {
    setSelected(e.target.id);
  };

  // This function creates Radio components based on an array of props objects
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
