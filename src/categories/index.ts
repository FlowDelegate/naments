import christmas from './christmas.json';
import easter from './easter.json';
import nineties from './90s.json';
import eighties from './80s.json';
import eightiesCartoons from './80s-cartoons.json';
import cats from './cats.json';
import simpsons from './simpsons.json';
import southPark from './south-park.json';
import superHeroes from './super-heroes.json';
import presidents from './presidents.json';
import movieStars from './movie-stars.json';
import streetBikes from './street-bikes.json';

export const registry: Record<string, string[]> = {
  'christmas': christmas,
  'easter': easter,
  '90s': nineties,
  '80s': eighties,
  '80s-cartoons': eightiesCartoons,
  'cats': cats,
  'simpsons': simpsons,
  'south-park': southPark,
  'super-heroes': superHeroes,
  'presidents': presidents,
  'movie-stars': movieStars,
  'street-bikes': streetBikes,
};
