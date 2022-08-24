
// bring fireEvent from tlr
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonWrapper from "./ButtonWrapper";

test('Handles onClick', () => {

  // Pass Onclick Handler
  // function that is going to track how often it's called and what it's called with
  const onClick = jest.fn();

  render(<ButtonWrapper onClick={onClick} title="Button" />);

  // since i gave Title to be 'Button'
  const buttonElement = screen.getByText("Button");

  // brought fireEvent from TLR
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1); // clicked once 
});
