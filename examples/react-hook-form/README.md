# React Hook Form example app

This example app serves as a guide to using the macpro-ux-lib components with [React Hook Form](https://react-hook-form.com/).

## Getting Started

1. Run `npm install` (or `npm clean-install` for a first-run clean installation of the dependencies).
2. Run `npm run start`.
3. The application will run at http://localhost:3000/ by default.

## The Components

The following components use React's [`forwardRef`](https://react.dev/reference/react/forwardRef) to expose the component to React Hook Form. Refer to `App.tsx` for living code samples. (Components marked with 🚧 are still in development.)

### [Checkbox](#checkbox)

Register each `Checkbox` component in a collection with the its corresponding collection name. You may also pass JSX or TSX components as children to appear when a checkbox is selected.

```tsx
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

### Radio

### TextArea

### TextInput
