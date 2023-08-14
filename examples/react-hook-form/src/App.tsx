import {
  Controller,
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import * as UX from "@enterprise-cmcs/macpro-ux-lib";
import "@enterprise-cmcs/macpro-ux-lib/build/assets/uswds/css/index.css";

type FormValues = {
  "date-range": string;
  "radio-group-option-2-textarea": string;
  "radio-group": string;
  checkbox3Children: string[];
  checkboxCollection: string[];
  datefield: string;
  fileInput: string;
  fruitChoices: string;
  multiSelect: string[];
  textArea: string;
  textInput1: string;
  textInput2: string;
};

export default function App() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      multiSelect: [],
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    console.log(errors, e);
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h1>React Hook Form Example App</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <hr />
        <h2>Dropdown</h2>

        <Controller
          control={control}
          name="multiSelect"
          render={({ field }) => {
            return (
              <UX.MultiSelect
                label="Select multiple items"
                value={field.value}
                setValue={field.onChange}
                data={[
                  {
                    displayString: "Apple",
                    value: "apple",
                  },
                  {
                    displayString: "Apricot",
                    value: "apricot",
                  },
                  {
                    displayString: "Avocado",
                    value: "avocado",
                  },
                ]}
              />
            );
          }}
        />

        <Controller
          control={control}
          name="fruitChoices"
          render={({ field }) => {
            return (
              <UX.Dropdown
                label="Select a fruit"
                value={field.value}
                onChange={field.onChange}
                data={[
                  {
                    displayString: "Apple",
                    value: "apple",
                  },
                  {
                    displayString: "Apricot",
                    value: "apricot",
                  },
                  {
                    displayString: "Avocado",
                    value: "avocado",
                  },
                ]}
              />
            );
          }}
        />

        <h2>TextInput</h2>
        <UX.TextInput
          errorMessage={errors.textInput1?.message}
          id="text-input-1"
          label="Text Input 1"
          {...register("textInput1")}
        />

        <UX.TextInput
          errorMessage={errors.textInput2?.message}
          id="textInput2"
          label="Required Text Input"
          required={true}
          {...register("textInput2", { required: "This field is required." })}
        />

        <hr />
        <h2>TextArea</h2>

        <UX.TextArea
          errorMessage={errors.textArea?.message}
          id="text-area"
          label="Text Area"
          showCharacterCount={true}
          {...register("textArea")}
        />

        <UX.TextArea
          errorMessage={errors.textArea?.message}
          id="text-area"
          label="Text Area"
          maxLength={100}
          showCharacterCount={true}
          {...register("textArea", { maxLength: 100 })}
        />

        <hr />
        <h2>Checkbox</h2>

        <UX.Checkbox
          id="checkbox-1"
          key="checkbox-1"
          label="Checkbox 1"
          value="Checkbox 1"
          {...register("checkboxCollection")}
        />
        <UX.Checkbox
          id="checkbox-2"
          key="checkbox-2"
          label="Checkbox 2"
          value="Checkbox 2"
          {...register("checkboxCollection")}
        />
        <UX.Checkbox
          id="checkbox-3"
          key="checkbox-3"
          label="Checkbox with Children"
          value="Checkbox with Children"
          children={[
            <UX.Checkbox
              id="checkbox-3-child-1"
              key="checkbox-3-child-1"
              label="Checkbox 3, Child 1"
              value="Checkbox 3, Child 1"
              {...register("checkbox3Children")}
            />,
            <UX.Checkbox
              id="checkbox-3-child-2"
              key="checkbox-3-child-2"
              label="Checkbox 3, Child 2"
              value="Checkbox 3, Child 2"
              {...register("checkbox3Children")}
            />,
          ]}
          {...register("checkboxCollection")}
        />

        <hr />
        <h2>RadioGroup</h2>

        <UX.RadioGroup
          groupName="radio-group"
          radioProps={[
            {
              id: "option-1",
              label: "Option 1",
              value: "option-1",
              ...register("radio-group"),
            },
            {
              id: "option-2",
              label: "Option 2",
              value: "option-2",
              ...register("radio-group", {}),
              children: [
                <p key="paragraph">A child may be any JSX element.</p>,
                <UX.TextArea
                  id="option-2-textarea"
                  key="option-2-textarea"
                  label="Option 2 TextArea"
                  {...register("radio-group-option-2-textarea")}
                />,
              ],
            },
          ]}
        />

        {/*

        <hr />
        <h2>Datefield</h2>

        <UX.Datefield
          id="datefield"
          label="Datefield"
          {...register("datefield")}
        />

        <hr />

        <h2>DateRange</h2>
        <UX.DateRange
          endInputId="id-2"
          endInputName="name-2"
          endLabel="End Date"
          startInputId="id-1"
          startInputName="name-1"
          startLabel="Start Date"
          {...register("date-range")}
        />

        <hr />
        <h2>File Input</h2>
        <UX.FileInput id="file-input" {...register("fileInput")} />
        
        */}

        <hr />
        <input type="submit" />
      </form>
    </div>
  );
}
