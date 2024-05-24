"use client"
import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from "./context/context";
import Hero from '@/app/components/Hero/Hero'


import { heroData, aboutData, projectsData, contactData, footerData } from '@/app/mock/data';
import About from './components/About/About';

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
  const [projects, setProjects] = useState([{}]);
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
    </PortfolioProvider>
  );
}
