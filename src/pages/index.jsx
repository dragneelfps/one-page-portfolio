import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Sourabh.
        </BigTitle>
        <Subtitle>I develop software and applications.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="RealWorld"
            link="https://github.com/dragneelfps/realworld-kotlin-ktor"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project showcases how to build a RealWorld backend using Kotlin-Ktor.
          </ProjectCard>
          <ProjectCard
            title="Thermal Config Changer"
            link="https://github.com/dragneelfps/ThermalConfigChanger"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I created thermal profile changer app(needs root) for my phone(POCOF1).
          </ProjectCard>
          <ProjectCard
            title="Navigate"
            link="https://github.com/dragneelfps/Navigate"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            I created an app for travelling using Google SDKs(Directions, Distance, etc).
          </ProjectCard>
          <ProjectCard
            title="More on Github"
            link="https://github.com/dragneelfps"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Sourabh S. Rawat" />
          <AboutSub>
            I get fascinated by new technologies coming out, and so I embark on the journey to learn them.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Building things, be it a web application or a mobile or a backend, is my dream.
          I like to lurk around GitHub, looking at awesome things done by awesome people.
          I hope one day I will become what I want to be, that is a developer.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:dragneelfps@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/dragneelfps">Github</a> &{' '}
            <a href="https://t.me/liam_smith404">Telegram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
