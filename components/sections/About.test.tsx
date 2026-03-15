
import { render, screen } from '@testing-library/react';
import About from './About';
import { describe, it, expect } from 'vitest';

describe('About component', () => {
  it('renders the about section with headline', () => {
    render(<About />);
    const headlineElement = screen.getByText("Fitness that Fits Real Life");
    expect(headlineElement).toBeInTheDocument();
  });
});
