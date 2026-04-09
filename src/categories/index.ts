import christmas from './christmas.json';
import easter from './easter.json';
import nineties from './90s.json';
import eighties from './80s.json';
import cats from './cats.json';
import simpsons from './simpsons.json';
import southPark from './south-park.json';
import superHeroes from './super-heroes.json';
import presidents from './presidents.json';
import movieStars from './movie-stars.json';

export const registry: Record<string, string[]> = {
  'christmas': christmas,
  'easter': easter,
  '90s': nineties,
  '80s': eighties,
  'cats': cats,
  'simpsons': simpsons,
  'south-park': southPark,
  'super-heroes': superHeroes,
  'presidents': presidents,
  'movie-stars': movieStars,
};
