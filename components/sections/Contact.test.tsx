
import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import { describe, it, expect } from 'vitest';

describe('Contact component', () => {
  it('renders the contact section with headline', () => {
    render(<Contact />);
    const headlineElement = screen.getByText("Right in the heart of downtown");
    expect(headlineElement).toBeInTheDocument();
  });
});
