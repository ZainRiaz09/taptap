export interface Level {
  number: number;
  requiredPoints: number;
  coinImage: string;
}

export const levels: Level[] = [
  {
    number: 1,
    requiredPoints: 0,
    coinImage: 'coin.png'
  },
  {
    number: 2,
    requiredPoints: 500,
    coinImage: 'coin_level2.png'
  },
  {
    number: 3,
    requiredPoints: 1000,
    coinImage: 'coin_level3.png'
  },
  {
    number: 4,
    requiredPoints: 2000,
    coinImage: 'coin_level4.png'
  },
  {
    number: 5,
    requiredPoints: 3000,
    coinImage: 'coin_level5.png'
  },
  {
    number: 6,
    requiredPoints: 5000,
    coinImage: 'coin_level6.png'
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
