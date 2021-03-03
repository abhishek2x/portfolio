import React from "react"
import { Layout } from "antd"
import Header from "../components/PageLayout/Header"

import SidebarWrapper from "../components/PageLayout/Sidebar"
import AboutMe from "../components/PageFragments/HomePage/AboutMe"
import Skills from "../components/PageFragments/HomePage/SkillProgress"
import Education from "../components/PageFragments/HomePage/Education"
import GitHub from "../components/PageFragments/HomePage/GitHub"

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills />
          <Education />
          <GitHub />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
)
