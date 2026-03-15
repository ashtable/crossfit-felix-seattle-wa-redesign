
import { render, screen } from '@testing-library/react';
import Layout from './layout';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/font/google', () => ({
  Inter: () => ({ className: 'inter' }),
}));

describe('Layout component', () => {
  it('renders the layout with header and footer', () => {
    render(<Layout><div>Page Content</div></Layout>);
    const headerElement = screen.getByRole('banner');
    const footerElement = screen.getByRole('contentinfo');
    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
});
