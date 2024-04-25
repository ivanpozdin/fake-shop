import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";

function AccountPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const labelCss = "flex flex-col";
  const inputCss = "border  p-2 w-64";

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl  mb-10">Login</h2>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center gap-5"
      >
        <label htmlFor="email-input" className={labelCss}>
          Email:
          <input
            type="email"
            name="email"
            id="email-input"
            className={inputCss}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </label>

        <label htmlFor="password-input" className={labelCss}>
          Password:
          <input
            type="password"
            name="email"
            id="password-input"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className={inputCss}
          />
        </label>

        <Button primary type="submit">
          Login
        </Button>
      </form>
      <ActiveLink to={"/register"} className="mb-3" activeClassName="">
        Don&apos;t have an account? Register
      </ActiveLink>
    </div>
  );
}
export default AccountPage;
