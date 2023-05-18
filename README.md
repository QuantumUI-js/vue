# Quantum Vue

A Vue 3 UI Framework build with TypeScript and Vite.

## Quickstart

Build library

```shell
vite build
```

Use this component library in other Vue 3 project.

```shell
npm install quantum-vue

# OR

npm install /path/to/quantum-vue
```

```vue
<template>
  <div>
    <Heading :text="'Hello world'" />
  </div>
</template>

<script lang="ts">
import { Heading} from 'quantum-vue'; // Update the import path with the correct location and name of the component

export default {
  components: {
    Heading,
  },
};
</script>
```