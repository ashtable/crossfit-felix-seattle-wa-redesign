
import { render, screen } from '@testing-library/react';
import WhyChooseUs from './WhyChooseUs';
import { describe, it, expect } from 'vitest';

describe('WhyChooseUs component', () => {
  it('renders the why choose us section with headline', () => {
    render(<WhyChooseUs />);
    const headlineElement = screen.getByText("Expert coaches, zero intimidation.");
    expect(headlineElement).toBeInTheDocument();
  });
});
