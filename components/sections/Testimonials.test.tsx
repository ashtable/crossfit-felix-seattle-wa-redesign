
import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';
import { describe, it, expect } from 'vitest';

describe('Testimonials component', () => {
  it('renders the testimonials section with headline', () => {
    render(<Testimonials />);
    const headlineElement = screen.getByText("What People Are Saying");
    expect(headlineElement).toBeInTheDocument();
  });
});
