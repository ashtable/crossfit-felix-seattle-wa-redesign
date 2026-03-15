import { test, expect } from 'vitest';
import config from './tailwind.config';

test('should load tailwind config without errors', () => {
  expect(config).toBeDefined();
});
