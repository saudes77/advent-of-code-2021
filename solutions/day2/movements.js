const movements = [
  { direction: "forward", distance: 8 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 6 },
  { direction: "up", distance: 6 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 7 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 1 },
  { direction: "up", distance: 3 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 1 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 7 },
  { direction: "up", distance: 2 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 5 },
  { direction: "up", distance: 9 },
  { direction: "up", distance: 4 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 7 },
  { direction: "down", distance: 4 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 5 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 2 },
  { direction: "up", distance: 5 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 1 },
  { direction: "up", distance: 5 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 1 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 5 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 9 },
  { direction: "up", distance: 6 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 3 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 1 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 9 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 7 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 2 },
  { direction: "up", distance: 8 },
  { direction: "up", distance: 6 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 3 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 6 },
  { direction: "up", distance: 6 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 1 },
  { direction: "down", distance: 4 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 1 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 1 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 2 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 4 },
  { direction: "up", distance: 4 },
  { direction: "up", distance: 2 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 5 },
  { direction: "up", distance: 5 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 9 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 1 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 7 },
  { direction: "up", distance: 3 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 2 },
  { direction: "up", distance: 6 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 9 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 1 },
  { direction: "up", distance: 7 },
  { direction: "down", distance: 4 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 6 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 1 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 1 },
  { direction: "up", distance: 9 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 9 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 7 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 7 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 7 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 6 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 2 },
  { direction: "up", distance: 3 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 1 },
  { direction: "down", distance: 4 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 4 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 4 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 3 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 1 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 6 },
  { direction: "up", distance: 6 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 9 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 6 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 4 },
  { direction: "up", distance: 1 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 4 },
  { direction: "up", distance: 9 },
  { direction: "up", distance: 7 },
  { direction: "forward", distance: 7 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 4 },
  { direction: "up", distance: 6 },
  { direction: "up", distance: 7 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 9 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 8 },
  { direction: "forward", distance: 5 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 2 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 6 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 4 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 6 },
  { direction: "forward", distance: 1 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 2 },
  { direction: "up", distance: 8 },
  { direction: "up", distance: 1 },
  { direction: "up", distance: 4 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 1 },
  { direction: "up", distance: 9 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 4 },
  { direction: "forward", distance: 6 },
  { direction: "up", distance: 7 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 2 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 7 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 1 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 1 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 3 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 2 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 5 },
  { direction: "up", distance: 1 },
  { direction: "up", distance: 9 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 6 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 6 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 9 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 7 },
  { direction: "up", distance: 1 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 5 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 7 },
  { direction: "down", distance: 4 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 9 },
  { direction: "up", distance: 3 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 5 },
  { direction: "up", distance: 9 },
  { direction: "down", distance: 9 },
  { direction: "up", distance: 9 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 8 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 5 },
  { direction: "up", distance: 9 },
  { direction: "up", distance: 7 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 1 },
  { direction: "up", distance: 6 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 1 },
  { direction: "up", distance: 1 },
  { direction: "forward", distance: 8 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 4 },
  { direction: "forward", distance: 1 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 8 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 5 },
  { direction: "up", distance: 6 },
  { direction: "up", distance: 6 },
  { direction: "forward", distance: 4 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 2 },
  { direction: "up", distance: 6 },
  { direction: "up", distance: 5 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 9 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 7 },
  { direction: "down", distance: 3 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 9 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 5 },
  { direction: "up", distance: 9 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 2 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 9 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 5 },
  { direction: "up", distance: 6 },
  { direction: "forward", distance: 8 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 3 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 4 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 3 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 6 },
  { direction: "up", distance: 8 },
  { direction: "up", distance: 3 },
  { direction: "up", distance: 4 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 7 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 8 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 7 },
  { direction: "down", distance: 5 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 2 },
  { direction: "up", distance: 5 },
  { direction: "up", distance: 6 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 4 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 2 },
  { direction: "down", distance: 3 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 5 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 1 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 1 },
  { direction: "up", distance: 2 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 4 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 6 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 7 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 5 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 5 },
  { direction: "up", distance: 8 },
  { direction: "up", distance: 1 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 2 },
  { direction: "up", distance: 3 },
  { direction: "up", distance: 4 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 6 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 8 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 1 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 2 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 2 },
  { direction: "up", distance: 4 },
  { direction: "up", distance: 2 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 1 },
  { direction: "up", distance: 5 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 1 },
  { direction: "up", distance: 5 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 7 },
  { direction: "down", distance: 5 },
  { direction: "up", distance: 4 },
  { direction: "forward", distance: 2 },
  { direction: "up", distance: 4 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 1 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 7 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 5 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 1 },
  { direction: "up", distance: 7 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 8 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 5 },
  { direction: "up", distance: 9 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 1 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 9 },
  { direction: "up", distance: 5 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 4 },
  { direction: "up", distance: 1 },
  { direction: "forward", distance: 4 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 7 },
  { direction: "up", distance: 3 },
  { direction: "forward", distance: 1 },
  { direction: "up", distance: 3 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 1 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 6 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 6 },
  { direction: "up", distance: 6 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 9 },
  { direction: "up", distance: 5 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 5 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 1 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 5 },
  { direction: "up", distance: 6 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 9 },
  { direction: "up", distance: 8 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 1 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 7 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 3 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 4 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 1 },
  { direction: "up", distance: 7 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 3 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 5 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 2 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 4 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 7 },
  { direction: "forward", distance: 1 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 8 },
  { direction: "up", distance: 6 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 3 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 1 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 4 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 2 },
  { direction: "up", distance: 5 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 7 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 5 },
  { direction: "down", distance: 9 },
  { direction: "up", distance: 5 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 2 },
  { direction: "up", distance: 8 },
  { direction: "up", distance: 9 },
  { direction: "up", distance: 9 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 8 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 1 },
  { direction: "down", distance: 2 },
  { direction: "up", distance: 3 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 4 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 5 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 2 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 8 },
  { direction: "up", distance: 6 },
  { direction: "up", distance: 2 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 4 },
  { direction: "up", distance: 2 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 9 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 3 },
  { direction: "forward", distance: 5 },
  { direction: "down", distance: 4 },
  { direction: "up", distance: 3 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 1 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 5 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 9 },
  { direction: "up", distance: 2 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 3 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 2 },
  { direction: "forward", distance: 4 },
  { direction: "up", distance: 6 },
  { direction: "down", distance: 6 },
  { direction: "up", distance: 9 },
  { direction: "forward", distance: 8 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 1 },
  { direction: "forward", distance: 4 },
  { direction: "up", distance: 1 },
  { direction: "up", distance: 2 },
  { direction: "down", distance: 9 },
  { direction: "forward", distance: 6 },
  { direction: "down", distance: 6 },
  { direction: "down", distance: 1 },
  { direction: "down", distance: 4 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 5 },
  { direction: "up", distance: 1 },
  { direction: "up", distance: 7 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 8 },
  { direction: "down", distance: 2 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 9 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 5 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 9 },
  { direction: "up", distance: 3 },
  { direction: "forward", distance: 2 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 6 },
  { direction: "forward", distance: 3 },
  { direction: "up", distance: 3 },
  { direction: "down", distance: 5 },
  { direction: "up", distance: 4 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 9 },
  { direction: "down", distance: 3 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 3 },
  { direction: "down", distance: 4 },
  { direction: "up", distance: 4 },
  { direction: "down", distance: 8 },
  { direction: "forward", distance: 6 },
  { direction: "forward", distance: 7 },
  { direction: "forward", distance: 9 },
  { direction: "forward", distance: 4 },
  { direction: "down", distance: 3 },
  { direction: "up", distance: 5 },
  { direction: "down", distance: 7 },
  { direction: "down", distance: 7 },
  { direction: "forward", distance: 9 }
];

export default movements;