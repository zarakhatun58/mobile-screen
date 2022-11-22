import { render, screen } from '@testing-library/react';
import App from './App';

test('header renders with react testing tutorial', () => {
  render(<App />);
  const linkElement = screen.getByText(/app name/i);
  expect(linkElement).toBeInTheDocument();

});

test("render login component in the document", () =>{
  const component=render(<App/>);
  // console.log(component);
  const childElement=component.getByLabelText("email");
  
  expect(childElement).toBeTruthy();
})


// expect(childElement).toBeInTheDocument();