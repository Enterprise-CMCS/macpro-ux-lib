#!/bin/bash
echo "This script generates a new template component with a specified name."
read -p "Enter the new component name: " component_name
echo "Creating new $component_name component"

mkdir src/components/$component_name

# replace TemplateComponent with new component name
sed "s/TemplateComponent/${component_name}/g" TemplateComponent/TemplateComponent.scss        > src/components/$component_name/$component_name.scss
sed "s/TemplateComponent/${component_name}/g" TemplateComponent/TemplateComponent.tsx         > src/components/$component_name/$component_name.tsx
sed "s/TemplateComponent/${component_name}/g" TemplateComponent/TemplateComponent.stories.tsx > src/components/$component_name/$component_name.stories.tsx
sed "s/TemplateComponent/${component_name}/g" TemplateComponent/TemplateComponent.test.tsx    > src/components/$component_name/$component_name.test.tsx

echo "done"