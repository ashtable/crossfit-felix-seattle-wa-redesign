
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { describe, it, expect } from 'vitest';

describe('Hero component', () => {
  it('renders the hero section with headline', () => {
    render(<Hero />);
    const headlineElement = screen.getByText("Seattle’s #1 Place to Start Your Fitness Journey");
    expect(headlineElement).toBeInTheDocument();
  });
});
