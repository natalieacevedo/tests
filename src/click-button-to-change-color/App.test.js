//https://www.w3.org/TR/wai-aria/#role_definitions
//https://github.com/testing-library/jest-dom matchers to test the state of the dom

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
//import { logRoles } from "@testing-library/dom"; //this shows the roles

test("button has correct initial color", () => {
  render(<App />);
  //find an element with a role of button and text of "change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button has correct initial text, and updates when click", () => {});

test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button"); //you dont have to give it a name but it's good habit
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  //expect text to change :
  expect(colorButton).toHaveTextContent("Change to red");
});

//You can have many assertion between the same test, they dont have to be separate like here

test("initial conditions", () => {
  render(<App />);
  //check that button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked(); //.not es una negacion de jest, como no existe ninguna assertion que sea no sea checked se usa asi
});

test("is button disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button");
  const inputBox = screen.getByRole("checkbox");
  fireEvent.click(inputBox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(inputBox);
  expect(colorButton).toBeEnabled();
});

test("is button gray when disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button");
  const inputBox = screen.getByRole("checkbox");
  fireEvent.click(inputBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(inputBox);
  expect(colorButton).toHaveStyle("background-color:red");
});
