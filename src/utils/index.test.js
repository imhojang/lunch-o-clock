import {
  shuffleArray,
  chunkArrayBySize,
  chunkArrayByCount,
  checkGroupSize,
  isDuplicateName,
  removeExtraWhiteSpace
} from './index'

describe('util functions', () => {
  describe('shuffleArray', () => {
    it('shuffleArray should return a new array', () => {
      const originalArray = [1, 2, 3]
      const shuffledArray = shuffleArray(originalArray)
      expect(originalArray).not.toBe(shuffledArray)
    })

    it('shuffleArray should return an array of same length', () => {
      const originalArray = [1, 2, 3]
      const shuffledArray = shuffleArray(originalArray)
      expect(originalArray.length).toBe(shuffledArray.length)
    })
  })

  describe('chunkArray functions', () => {
    it('chunkArrayBySize should chunk by size correctly', () => {
      const arraySize = 12
      const someArray = new Array(arraySize)
      const chunkSize = 3
      expect(chunkArrayBySize(someArray, chunkSize)[0].length).toBe(chunkSize)
    })

    it('chunkArrayByCount should chunk by count correctly', () => {
      const arraySize = 12
      const someArray = new Array(arraySize)
      const chunkCount = 6
      expect(chunkArrayByCount(someArray, chunkCount).length).toBe(chunkCount)
    })
  })

  describe('checkGroupSize', () => {
    it('should return false when there are 0 people', () => {
      const people = []
      const groupSize = null
      expect(checkGroupSize(people, groupSize)).toBe(false)
    })

    it('should return false when groupSize is less than 1', () => {
      const people = [{ name: 'Silvia' }]
      const groupSize = 0
      expect(checkGroupSize(people, groupSize)).toBe(false)
    })

    it('should return false when groupSize is greater than number of people', () => {
      const people = [{ name: 'Kim' }, { name: 'Max' }, { name: 'Julio' }]
      const groupSize = 10
      expect(checkGroupSize(people, groupSize)).toBe(false)
    })

    it('should return true', () => {
      const people = [{ name: 'Kim' }, { name: 'Max' }, { name: 'Julio' }]
      const groupSize = 1
      expect(checkGroupSize(people, groupSize)).toBe(true)
    })
  })

  describe('isDuplicateName', () => {
    it('should return false if there are no duplicates', () => {
      const name = 'Andrea'
      const people = [{ name: 'John' }, { name: 'Sven' }]
      expect(isDuplicateName(name, people)).toBe(false)
    })

    it('should return true if there is a duplicate', () => {
      const name = 'John'
      const people = [{ name: 'John' }, { name: 'Sven' }]
      expect(isDuplicateName(name, people)).toBe(true)
    })
  })

  describe('removeExtraWhiteSpace', () => {
    it('should remove extra white spaces between words', () => {
      const string = 'Alex        Kim'
      const expectedString = 'Alex Kim'
      expect(removeExtraWhiteSpace(string)).toBe(expectedString)
    })

    it('should remove extra white spaces around words', () => {
      const string = '            Alex Kim         '
      const expectedString = 'Alex Kim'
      expect(removeExtraWhiteSpace(string)).toBe(expectedString)
    })

    it('should remove extra white spaces between and around words', () => {
      const string = '      Alex      Kim      '
      const expectedString = 'Alex Kim'
      expect(removeExtraWhiteSpace(string)).toBe(expectedString)
    })
  })
})
