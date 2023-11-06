const getYears = require('../problem4');

describe('getYears function', () => {
    it('should return all the years from every car on the lot', () => {
        const result = getYears();
        expect(result).toEqual(expectedResult);
    })
});



const expectedResult = [
    2009, 2001, 2010, 1983, 1990, 1995,
    2009, 1987, 1996, 2000, 2004, 2004,
    1997, 1999, 2000, 2001, 1987, 1995,
    1994, 1985, 2003, 1997, 1992, 2003,
    2005, 2005, 2000, 2005, 1993, 2010,
    1964, 1999, 2011, 1991, 2000, 2003,
    1997, 1992, 1998, 2012, 1965, 1996,
    2009, 2012, 2008, 1995, 2007, 2008,
    1996, 1999
  ];