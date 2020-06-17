/*
  1. How many searhes
    a) given [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] array
      seq 1: find middle of entire and compare middle to search value
      seq 2: 11 > 8, so we search through the array of [3, 5, 6, 8]
      seq 3: 5 is the new base and < 8, so we search through the array of [6, 8]
      seq 4: 6 is the new base and < 8, so we return 8 as the last value
    
    b) given [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
      seq 1: find middle of entire and compare middle to search value
      seq 2: 12 > 16, so we search through the array of [14, 15, 17, 18]
      seq 3: 17 is the new base and > 16, so we search through the array of [14, 15]
      seq 4: 15 is the new base and < 16, but when we iterate to the next call,
              the start will now be > end, so it wil return -1 signaling the value
              doesnt't exist.
*/