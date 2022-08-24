import { render, screen } from '@testing-library/react';
import Sidebar from "./Sidebar";


test('renders a name', () => {
  const items = [
    {
      name: "test",
      href: "/test"
    },
  ]
  render(<Sidebar items={items} />);
  const anchorElement = screen.getAllByRole("navigation");
  // expect(anchorElement[0]).toHaveTextContent("test") // hard coding value
  expect(anchorElement[0]).toHaveTextContent(items[0].name)
  expect(anchorElement[0]).toHaveAttribute("href", items[0].href)
});
