<!--
Render Markdown in VS Code

SHIFT + CMD/CTRL + V
-->

# Contributing to the MACPro UX Library

We love your input! We want to make contributing to this project as easy and transparent as possible.

## Getting the Project Running Locally

### Clone the Repository

```
git clone https://github.com/CMSgov/macpro-ux-lib macpro-ux-lib
```

### Create a Branch describing the issue

```
// For Example
git checkout -b add-radio-button
```

### Run the Project

```
cd macpro-ux-lib
npm install
npm run storybook
```

After running the aformentioned code you will be able to preview any changes you make to the component library in storybook. For more on storybook reference their documentation.
[Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)

### Pull Requests

We use pull request to drive a variety of actions and workflows in the project

Once you are satisfied with the code you have made it is time to make a pull request. Be sure to follow the pull-request template when creating your pull request. Upon doing this and provided all of the additional checks pass your code will be reviewed and approved if the changes are in line with the projects plans.

### Testing

#### Testing the NPM Distribution

We have a simple React application in `examples/macpro-example` that can be used as a sandbox environment. This application has `@enterprise-cmcs/macpro-ux-lib` listed as a dependeny in its `package.json` file which allows you to experience working with the library as any other user who installs the package. Running the application should be simple:

```
npm install && npm start
```

##### Local Testing Prior to Publishing Changes

Before publishing updates to the package, all changes should be tested locally. _**It is the responsibility of the developer making the changes**_ to confirm that their updates work in a production setting and do not break the package.

To do this, you will need to build the package locally and test it in `examples/macpro-example` or something similar.

```bash
# Run the following from project root

# delete existing node_module in example
rm -rf examples/macpro-example/node_modules/@enterprise-cmcs/macpro-ux-lib/build

# delete .cache/
rm -rf examples/macpro-example/node_modules/.cache

# build package locally
npm run build

# replace package build directory
cp -rf build/ examples/macpro-example/node_modules/@enterprise-cmcs/macpro-ux-lib/build/

npm start

##################
# one line version
##################
rm -rf examples/macpro-example/node_modules/@enterprise-cmcs/macpro-ux-lib/build && rm -rf examples/macpro-example/node_modules/.cache && npm run build && cp -rf build/ examples/macpro-example/node_modules/@enterprise-cmcs/macpro-ux-lib/build/
```

If this works as expected, the example application should start without any issue. Implement whatever is necessary in the example app to confirm your changes will work when the package is updated.

Note: If you change a directory name it is possible that it may persist in `build/`. If you encounter an issue where expected changes are not taking effect, try deleting `build/` at the project root and run `npm run build` again.
