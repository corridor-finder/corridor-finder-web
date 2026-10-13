import { render, screen } from '@testing-library/react';
import HomePage from './page';

describe('HomePage', () => {
  it('names the product and the question it answers', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1, name: 'Corridor Finder' })).toBeInTheDocument();
    expect(screen.getByText(/actually connect one country to another/i)).toBeInTheDocument();
  });

  it('says plainly that no data is shown yet', () => {
    render(<HomePage />);
    expect(screen.getByRole('status')).toHaveTextContent(/no data is shown/i);
  });

  it('states the no-fabrication rules', () => {
    render(<HomePage />);
    expect(screen.getByText(/shown as “unavailable”, never estimated/i)).toBeInTheDocument();
  });
});
