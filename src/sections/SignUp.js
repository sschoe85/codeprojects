import React from "react"
import Button from "../components/Button"
import SectionHeader from "../components/SectionHeader"

function SignUp() {
  return (
    <section>
      <SectionHeader>How to sign up</SectionHeader>
      <p>
        Write an email with your first and last name and your grade level to
        info@code-projects.de. Feel free to tell me about any ideas you have for
        a website or an app you would like to code.
      </p>
      <a href="mailto:info@code-projects.de">
        <Button small>Sign up now</Button>
      </a>
    </section>
  )
}
export default SignUp
