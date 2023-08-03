# React Hook Form example app

This example app serves as a guide to using the macpro-ux-lib components with [React Hook Form](https://react-hook-form.com/).

## Getting Started

1. Run `npm install` (or run `npm clean-install` for a first-run clean installation of the dependencies).
2. Run `npm run start`.
3. The application will run at http://localhost:3000/ by default.

## The Components

The following components use React's [`forwardRef`](https://react.dev/reference/react/forwardRef) to expose the component to RHF. Refer to `App.tsx` for living code samples, and refer to the included Storybook (`npm run storybook`) for general information on setting up each component.

(Components marked with 🚧 are still in development for use with RHF.)

- [Checkbox](#checkbox)
- [Datefield](#datefield) 🚧
- [DateRange](#daterange) 🚧
- [Dropdown](#dropdown)
- [FileInput](#fileinput) 🚧
- [MultiSelect](#multiselect)
- [Radio](#radio)
- [TextArea](#textarea)
- [TextInput](#textinput)

### Checkbox

Register each `Checkbox` component in a collection with the its corresponding collection name. You may also pass JSX or TSX components as children to appear when a checkbox is selected.

```js
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
```

### Datefield

In development.

### DateRange

In development.

### Dropdown

Wrap the `Dropdown` component in an RHF [`Controller`](https://react-hook-form.com/docs/usecontroller/controller) component, setting `control` from `useForm`. `control` is optional when using `FormProvider`.

Set the component's `value` and `onChange` attributes to their corresponding RHF `field` values.

```js
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
```

### FileInput

In development.

### MultiSelect

Similar to `Dropdown`, wrap the `MultiSelect` component in a RHF [`Controller`](https://react-hook-form.com/docs/usecontroller/controller) component, setting `control` from `useForm`. `control` is optional when using `FormProvider`.

Setting both `value` and `setValue` tells the `MultiSelect` component that the parent component, in this case RHF, has external control and will not rely on internal state. Note that you must set `setValue` to `field.onChange` for the array of selected values to propagate to RHF.

```js
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
```

### Radio

To enable a `RadioGroup` for use with RHF, be sure to register related checkboxes with the same group name (`radio-group` in the example below). Pass individual radio button options as an array of objects to `radioProps`, including nested children.

```js
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
      ...register("radio-group"),
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
```

### TextArea

Register `TextArea` with RHF. If you would like to add validation rules such as `maxLength`, you can also do that with RHF's [`register`](https://react-hook-form.com/docs/useform/register) method.

```js
<UX.TextArea
  errorMessage={errors.textArea?.message}
  id="text-area"
  label="Text Area"
  {...register("textArea")}
/>

<UX.TextArea
  errorMessage={errors.textArea?.message}
  id="text-area"
  label="Text Area"
  maxLength={100}
  showCharacterCount={true}
  {...register("textAreaRequired", { maxLength: 100 })}
/>
```

### TextInput

Register `TextInput` with RHF. If you would like to add validation rules such as `required`, you can also do that with RHF's [`register`](https://react-hook-form.com/docs/useform/register) method. For required fields, the `required` string will appear if the user tries to submit the form without input.

```JS
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
  {...register("textInputRequired", { required: "This field is required." })}
/>
```
