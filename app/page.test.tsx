
import { render, screen } from '@testing-library/react';
import Page from './page';
import { describe, it, expect } from 'vitest';

describe('Page component', () => {
  it('renders the main page with hero section', () => {
    render(<Page />);
    const headlineElement = screen.getByText("Seattle’s #1 Place to Start Your Fitness Journey");
    expect(headlineElement).toBeInTheDocument();
  });
});
