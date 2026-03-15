
import { render, screen } from '@testing-library/react';
import Team from './Team';
import { describe, it, expect } from 'vitest';

describe('Team component', () => {
  it('renders the team section with headline', () => {
    render(<Team />);
    const headlineElement = screen.getByText("Meet the team behind Felix Athletics");
    expect(headlineElement).toBeInTheDocument();
  });
});
