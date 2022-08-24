import { render, screen } from '@testing-library/react';
import Basic from "./Basic";

test('renders a name', () => {
  render(<Basic basic={"basic"} />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("basic = basic");
  expect(divElement).toHaveAttribute("class", "yaho"); // class name
});
