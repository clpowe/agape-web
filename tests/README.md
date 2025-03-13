# Testing Guide for Agape Web

This directory contains tests for the Agape Web project using Vitest and @nuxt/test-utils.

## Running Tests

You can run tests using the following npm scripts:

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch
```

## Test Structure

The tests are organized by component type:

- `/tests/components/` - Tests for Vue components
- `/tests/composables/` - Tests for Vue composables (coming soon)
- `/tests/pages/` - Tests for page components (coming soon)

## Writing Component Tests

When writing tests for Vue components, follow these guidelines:

1. Import `mountSuspended` from '@nuxt/test-utils/runtime' to mount your components
2. Use relative imports for components, e.g., `import MyComponent from '../../app/components/MyComponent.vue'`
3. Stub the `NuxtLink` component in your tests using the global stubs option:

```typescript
const wrapper = await mountSuspended(MyComponent, {
  props: { ... },
  global: {
    stubs: {
      NuxtLink: {
        template: '<a :href="to"><slot /></a>',
        props: ['to']
      }
    }
  }
})
```

4. Test component props, rendered elements, and component interactions
5. Keep tests focused and isolated

## Example Test

See `components/ListSection.test.ts` for an example test that demonstrates:

- Testing component rendering
- Checking prop passing
- Verifying component structure
- Testing different component configurations

## Useful Resources

- [Vitest Documentation](https://vitest.dev/api/)
- [Nuxt Test Utils Documentation](https://nuxt.com/docs/guide/going-further/testing)
- [Vue Test Utils Documentation](https://test-utils.vuejs.org/guide/)
