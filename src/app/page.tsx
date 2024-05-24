"use client"
import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from "./context/context";
import { heroData, aboutData, projectsData, contactData, footerData } from './mock/data';
import Hero from './components/Hero/Hero'; // Import the missing module

import About from './components/About/About';
import Projects from './components/Projects/Projects';

export default function Home() {
  const [hero, setHero] = useState({
    title: '',
    name: '',
    subtitle: '',
    cta: ''
  });
  const [about, setAbout] = useState({
    img: '',
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: ''
  });
  const [projects, setProjects] = useState([{
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '',
    img: '',
    id: ''
  }]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
    </PortfolioProvider>
  );
}
