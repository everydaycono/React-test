### TEST Blue Collar Code


1. Basic Component test

```ts // Person.tsx
test('renders a Person', () => {
  render(<Person name="Cono" />);
  const linkElement = screen.getByText(/name is/i);
  expect(linkElement).toBeInTheDocument();
});
```


```ts // Basic.tsx getByRole 
test('renders a Basic', () => {
  render(<Basic basic={"basic"} />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("basic = basic");
  expect(divElement).toHaveAttribute("class", "yaho"); // class name
});

```