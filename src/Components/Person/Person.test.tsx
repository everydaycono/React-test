import { render, screen } from '@testing-library/react';
import Person from "./Person";

test('renders a name', () => {
  render(<Person name="Cono" />);
  const linkElement = screen.getByText(/name is/i);
  expect(linkElement).toBeInTheDocument();
});
