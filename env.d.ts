/// <reference types="vite/client" /> // If using Vite
// OR /// <reference types="vue/macros-global" /> // If using specific Vue 3.3+ macro features
// OR ensure you have a generic shim if neither of the above apply directly or if issues persist:

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}