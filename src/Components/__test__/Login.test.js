import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Login, { validateEmail } from "../Login";

describe("Test the Login Component", () => {
    test("render the login form with 2 button", async () => {
        render(<Login />);
        const buttonList = await screen.findAllByRole("button");

        expect(buttonList).toHaveLength(2);
    })


    test("should failed on email validation", () => {
        const testEmail = "jkhatun.com";
        expect(validateEmail(testEmail)).not.toBe(true);
    });
    test("email input field should accept email", () => {
        render(<Login />);
        const email = screen.getByPlaceholderText("enter email")
        userEvent.type(email, "jkhatun");
        expect(email.value).not.toMatch("jkhatun258@gmail.com")
    });

    test("password input should have type password", () => {
        render(<Login />);
        const password = screen.getByPlaceholderText("password");
        expect(password).toHaveAttribute("type", "password");

    });
    test("should be able to reset the form", () => {
        const { getByLabelText, getByTestId } = render(<Login />);
        const resetBtn = getByTestId("reset");
        const emailInputNode = screen.getByPlaceholderText("enter email");
        const passwordInputNode = screen.getByPlaceholderText("password");
        fireEvent.click(resetBtn);
        expect(emailInputNode.value).toMatch("");
        expect(passwordInputNode.value).toMatch("");

    });

    test("should be able to submit the form", () => {
        render(<Login />);
        const submitBtn = screen.getByTestId("submit");
        const emailInputNode = screen.getByPlaceholderText("enter email");
        const passwordInputNode = screen.getByPlaceholderText("password");

        userEvent.type(emailInputNode, "jkhatun258@gmail.com");
        userEvent.type(passwordInputNode, "123456");

        userEvent.click(submitBtn);

        const userInfo = screen.getByText("jkhatun258@gmail.com")
        expect(userInfo).toBeInTheDocument();

    });

    test("should display error if incorrect email address", () => {
        render(<Login />);
        const submitBtn = screen.getByTestId("submit");
        const emailInputNode = screen.getByPlaceholderText("enter email");
        const passwordInputNode = screen.getByPlaceholderText("password");

        userEvent.type(emailInputNode, "jkhatun");
        userEvent.type(passwordInputNode, "123456");

        userEvent.click(submitBtn);

        const userInfo = screen.getByText("Email is not valid")
        expect(userInfo).toBeInTheDocument();

    });



})