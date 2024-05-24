import React from 'react';

const IPortfolio = {
  hero: {
    title: '',
    name: '',
    subtitle: '',
    cta: ''
  },
  about: {
    img: '',
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: ''
  },
  contact: {},
  projects: [{}],
  footer: {},
}


const PortfolioContext = React.createContext(IPortfolio);

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
