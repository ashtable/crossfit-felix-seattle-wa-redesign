import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Card from './Card';

test('renders card with title and children', () => {
  render(
    <Card title="My Card">
      <p>This is the card content.</p>
    </Card>
  );
  const titleElement = screen.getByText(/My Card/i);
  const contentElement = screen.getByText(/This is the card content./i);
  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});
