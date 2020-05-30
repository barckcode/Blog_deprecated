import { v4 as uuidv4 } from 'uuid';

export const socialMedia = [
  {
    id: uuidv4(),
    image: 'github.svg',
    url: 'https://github.com/BarckCode'
  },
  {
    id: uuidv4(),
    image: 'twitter.svg',
    url: 'https://twitter.com/barckcode'
  },
  {
    id: uuidv4(),
    image: 'linkedin.svg',
    url: 'https://www.linkedin.com/in/barckcode/'
  },
  {
    id: uuidv4(),
    image: 'instagram.svg',
    url: 'https://www.instagram.com/_barckcode/'
  },
]

export const projectsList = [
  {
    id: uuidv4(),
    title: 'Infographics App',
    image: 'infographics_app.png',
    repo: 'https://github.com/BarckCode/Web-Development-Infographics',
    url: 'https://barckcode.github.io/Web-Development-Infographics/',
  },
  {
    id: uuidv4(),
    title: 'Weather App',
    image: 'weather_app.png',
    repo: 'https://github.com/BarckCode/Weather-App',
    url: 'https://barckcode-weather.netlify.app/'
  },
]