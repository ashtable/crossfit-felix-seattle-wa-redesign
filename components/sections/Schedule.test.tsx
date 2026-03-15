
import { render, screen } from '@testing-library/react';
import Schedule from './Schedule';
import { describe, it, expect } from 'vitest';

describe('Schedule component', () => {
  it('renders the schedule section with headline', () => {
    render(<Schedule />);
    const headlineElement = screen.getByText("Built to Fit Your Life");
    expect(headlineElement).toBeInTheDocument();
  });
});
