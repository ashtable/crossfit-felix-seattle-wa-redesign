
import { render, screen } from '@testing-library/react';
import Services from './Services';
import { describe, it, expect } from 'vitest';

describe('Services component', () => {
  it('renders the services section with headline', () => {
    render(<Services />);
    const headlineElement = screen.getByText("What We Do Here");
    expect(headlineElement).toBeInTheDocument();
  });
});
