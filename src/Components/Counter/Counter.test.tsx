// bring fireEvent from tlr
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "./Counter";

test('testing state hooks', () => {
  render(<Counter />);

  // Find by role
  const divElement = screen.getByRole('counthook');

  // Find by Tag Name (button)
  const buttonElement = screen.getByRole((content, element) => element?.tagName.toLocaleLowerCase() === "button");
  // brought fireEvent from TLR

  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent("Count is 1"); // clicked once 
});
