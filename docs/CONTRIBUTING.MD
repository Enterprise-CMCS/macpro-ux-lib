<!--
Render Markdown in VS Code

SHIFT + CMD/CTRL + V
-->

# Contribute to the MACPro UX Library

We love your input! We want to make contributing to this project as easy and transparent as possible.

## Running the Project Locally

We use [Storybook](https://storybook.js.org/) to build, organize, and document the components in this library. To get started, clone the repository:

```
git clone https://github.com/CMSgov/macpro-ux-lib macpro-ux-lib
```

Create a branch describing the issue or feature you are contributing:

```
// For Example
git checkout -b add-radio-button
```

Run Storybook with the following:

```
cd macpro-ux-lib
npm install
npm run storybook
```

You can now preview any changes you make to the component library in Storybook ([http://localhost:6006](http://localhost:6006) by default). More information on Storybook can be found in the [Storybook for React documentation](https://storybook.js.org/docs/react/get-started/introduction).

## Background

The React components in this library are largely based on the [U.S. Web Design System (USWDS)](https://github.com/uswds/uswds) and [CMS Design System](https://design.cms.gov/?theme=core). When contributing to existing components or creating new ones, it may be a good idea to review the existing components and adapt the code from the examples in the above two links.

## Creating a New Component

All of the components live in `src/components/`, and each new component should be included here. Components can be created from scratch, but we recommended that you use an existing component as a reference. Additionally, you may generate a simple boilerplate component using `npm run generate-component`.

The `generate-component.sh` script creates a new component by referencing the `TemplateComponent` directory in the project root. Upon running, the script will prompt you to provide a name for the new component and create a directory with a basic working component and Storybook story.

Example:

```bash
$ npm run generate-component

This script generates a new template component with a specified name.
Enter the new component name: NewComponent

# Output:
# src/components/NewComponent/
# ├── NewComponent.scss
# ├── NewComponent.stories.tsx
# ├── NewComponent.test.tsx
# └── NewComponent.tsx
```

At the present time, this script does not add imports for your new component in `_uswds-theme-custom-styles.scss` or in `index.tsx`. These are required if you want to include custom CSS or include your component in the packaged version of this code. See [Using Custom Styles](#using-custom-styles) for more.

Finally, add your new component to `src/index.tsx` in order to appear in Storybook.

## Pull Requests

We use pull request to drive a variety of actions and workflows in the project.

Be sure to follow the template when creating your [pull request on GitHub](https://github.com/CMSgov/macpro-ux-lib/pulls). Upon doing this, and provided all of the additional checks pass, your code will be reviewed and approved if the changes are in line with the projects plans.

## Deployment

The short version of the CICD Pipeline is `Pull Request → Github Actions → AWS Amplify Temporary Environments → Accessible Application → Pull Request Approval → Master deployment & New Version `

All of the deployments start with new code on a branch. A branch environment is created and this is where automated and manual testing occurs. Once all of the checks have been passed on a branch, it is pulled into the Master branch. The master branch specifically lives in the git-hub actions branch `gha-pages` and serves as our most up to date deployment environment. It is where live users have access to the new features and new components. It is available to view at [https://cmsgov.github.io/macpro-ux-lib](https://cmsgov.github.io/macpro-ux-lib).

## Testing the NPM Distribution

We have a simple React application in `examples/macpro-example` that can be used as a sandbox environment. This application has `@enterprise-cmcs/macpro-ux-lib` listed as a dependeny in its `package.json` file which allows you to experience working with the library as any other user who installs the package. Running the application should be simple:

```
npm install && npm start
```

## Local Testing Prior to Publishing Changes

Before publishing updates to the package, all changes should be tested locally. **It is the responsibility of the developer making changes** to verify their updates work in a production setting and do not break the package.

To do this, you will need to build the package locally and test it in `examples/macpro-example` (or something similar).

```bash
# Run from project root
npm run use-local-build

cd examples/macpro-example

npm start
```

If this works as expected, the `use-local-build` script will run the build and replace `@enterprise-cmcs/macpro-ux-lib` in the example project with the build output. The example application should start without any issue. Implement whatever is necessary in the example app to confirm your changes will work when the package is updated.

**Note:** It is possible that large changes may persist in `build/` between builds, such as changing a directory name. If you encounter an issue where expected changes are not taking effect, try deleting `build/` at the project root and run `npm run use-local-build` again.

## USWDS Dependency

MACPro UX library components rely on JavaScript and SCSS from the [U.S. Web Design System (USWDS)](https://github.com/uswds/uswds). Currently, this UX library uses USWDS 3.0. As of October 19, 2022, the latest version of USWDS is 3.2.0. See [Future Improvements](#future-improvements) for more.

## Using Custom Styles

Many of the styles used in this library are inherited from USWDS. For certain components, custom styles are necessary to fulfil our design goals.

The `src/assets/theme/` directory contains several files:

- `_macbis-colors.scss` contains the MACBIS color palette.
- `_uswds-theme-custom-styles.scss` is where we import component-specific SCSS files.
- `_uswds-theme.scss` is a boilerplate file generated by USWDS. See the [USWDS documentation](https://designsystem.digital.gov/documentation/developers/#using-uswds-css-and-javascript-in-your-project) for more.
- `styles.scss` is the app's entry point for USWDS and custom styles.

If your component requires custom styling beyond what is provided by USWDS, you will need to create a component-level SCSS file. For example, if you have `ExampleComponent` that needs custom styles, you would create a `ExampleComponent.scss` file in the component directory alongside the component's `.tsx`, `.stories.tsx`, and `.test.tsx` files.

In this new SCSS file, start by importing the MACbis color palette:

```typescript
@use "../../assets/theme/macbis-colors" as c;
```

You may now access the MACbis colors in the format `c.$primary`, `c.$error`, `c.$warn`, etc.

Next, add your custom styles.

Once you've created your custom SCSS file, `@forward` it in `_uswds-theme-custom-styles.scss`. Your custom styles will then be ready to appear in Storybook.

For examples on how to use custom SCSS files, look at the components listed in `_uswds-theme-custom-styles.scss`.

## USWDS JavaScript

Some components, such as Tooltip, rely on USWDS JavaScript files. If you are building a library component and would like to leverage the USWDS JavaScript, you will need to import that component's JS directly from the USWDS package.

Currently, the way to import the USWDS's `usa-tooltip` JavaScript is to reference it directly:

```typescript
import tooltip from "../../../node_modules/@uswds/uswds/packages/usa-tooltip/src";
```

**Note:** The above works with USWDS 3.0. This process may be different for more recent versions.

Once you've imported the JS, you will need to initialize it in your React component. In Tooltip, it is done like this:

```typescript
const tooltipRef = useRef < HTMLSpanElement > null;

useLayoutEffect(() => {
  const tooltipElement = tooltipRef.current;
  if (typeof tooltip.on === "function") tooltip.on(tooltipElement);
  return () => {
    if (typeof tooltip.off === "function") tooltip.off(tooltipElement);
  };
});
```

We use `useRef` to avoid importing multiple instances of the same JS file. In `useLayoutEffect()`, we ensure that the imported `tooltip` has an `.on` function, and then we call it, passing the ref as a parameter. This will add the necessary `tooltip` JavaScript to the `HTMLSpanElement` created by `useRef`.

In the `return` block, we will deinitialize the `tooltip` by using its `off` function, removing it at the end of the React component lifecycle.

Your component will now be able to take advantage of the USWDS component's JavaScript functionality.

For the latest information on importing USWDS JavaScript, consult the [USWDS documentation](https://designsystem.digital.gov/documentation/developers/#using-uswds-css-and-javascript-in-your-project).

This [discussion topic](https://github.com/uswds/uswds/discussions/4680) on using USWDS with React component in Storybook may also be useful.

## Future Improvements

The MACPro UX library was built using version 3.0 of USWDS. As of this writing (October 19, 2022), USWDS released [version 3.2.0](https://github.com/uswds/uswds). Future maintainers and contributors may want to upgrade the library to use [the latest version of USWDS](https://github.com/uswds/uswds/releases/) before fixing bugs or adding new features.

It may also be worth looking into another way to show users how some components take data objects (such as JSX objects) as parameters. Currently, we hide these data objects in the main Storybook view and users may look at the example code snippets for reference, but it may be worth investigating a more clear way to call this out.
