import newsletterData from './newsletter.json';

export function getNewsletter() {
  return Promise.resolve(newsletterData);
}