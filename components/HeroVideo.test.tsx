
import { render, screen } from '@testing-library/react';
import HeroVideo from './HeroVideo';
import { describe, it, expect } from 'vitest';

describe('HeroVideo component', () => {
  it('renders the video with correct attributes', () => {
    render(<HeroVideo src="/videos/test.mp4" />);
    const videoElement = screen.getByTestId('hero-video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('autoPlay');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement).toHaveAttribute('playsInline');
  });
});
