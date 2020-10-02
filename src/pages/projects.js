import React from "react"
import PageLayout from "../components/PageLayout"
import SectionHeader from "../components/SectionHeader"

function projects(props) {
  return (
    <PageLayout>
      <SectionHeader>CodeProjects Junior</SectionHeader>
      <p>
        There's nothing here yet. Once you have finished coding your website, you
        will be able to display it here.
      </p>
      <SectionHeader>CodeProjects Senior</SectionHeader>
      <p>
        There's nothing here yet. Once you have finished coding your app, you
        will be able to display it here.
      </p>
    </PageLayout>
  )
}

export default projects
