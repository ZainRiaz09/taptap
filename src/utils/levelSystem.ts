export interface Level {
  number: number;
  requiredPoints: number;
  coinImage: string;
}

// Import all coin images
import coin from '../images/coin.png';
import coinLevel2 from '../images/coin_level2.png';
import coinLevel3 from '../images/coin_level3.png';
import coinLevel4 from '../images/coin_level4.png';
import coinLevel5 from '../images/coin_level5.png';
import coinLevel6 from '../images/coin_level6.png';

export const levels: Level[] = [
  {
    number: 1,
    requiredPoints: 0,
    coinImage: coin
  },
  {
    number: 2,
    requiredPoints: 500,
    coinImage: coinLevel2
  },
  {
    number: 3,
    requiredPoints: 1000,
    coinImage: coinLevel3
  },
  {
    number: 4,
    requiredPoints: 2000,
    coinImage: coinLevel4
  },
  {
    number: 5,
    requiredPoints: 3000,
    coinImage: coinLevel5
  },
  {
    number: 6,
    requiredPoints: 5000,
    coinImage: coinLevel6
  }
];

export const getCurrentLevel = (points: number): Level => {
  return levels.reduce((highest, current) => {
    if (points >= current.requiredPoints && current.number > highest.number) {
      return current;
    }
    return highest;
  }, levels[0]);
};
