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

2. Multiple Element test

```ts // Sidebar.tsx getAllByRole 
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
```

3. Event Handler Test

```ts // ButtonWrapper.tsx 
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
```