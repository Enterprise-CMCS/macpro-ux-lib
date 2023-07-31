# React Hook Form example app

This example app serves as a guide to using the macpro-ux-lib components with [React Hook Form](https://react-hook-form.com/).

## Getting Started

1. Run `npm install` (or run `npm clean-install` for a first-run clean installation of the dependencies).
2. Run `npm run start`.
3. The application will run at http://localhost:3000/ by default.

## The Components

The following components use React's [`forwardRef`](https://react.dev/reference/react/forwardRef) to expose the component to RHF. Refer to `App.tsx` for living code samples. (Components marked with 🚧 are still in development.)

### [Checkbox](#checkbox)

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

### 🚧 Datefield

### 🚧 DateRange

### Dropdown

### 🚧 FileInput

### MultiSelect

Wrap the `MultiSelect` component in a RHF [`Controller`](https://www.react-hook-form.com/api/usecontroller/controller/) component, setting `control` from `useForm`. `control` is optional when using `FormProvider`.

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

### TextArea

### TextInput
