const sortByModel = require('../problem3');

describe('sortByModel function', () => {
    it('should sort by inventory by car model', () => {
        const result = sortByModel();
        expect(result).toEqual(expectedResult);
    })
});

const expectedResult =[
  '300M',           '4000CS Quattro',       '525',
  '6 Series',       'Accord',               'Aerio',
  'Bravada',        'Camry',                'Cavalier',
  'Ciera',          'Defender Ice Edition', 'E-Class',
  'Econoline E250', 'Escalade',             'Escort',
  'Esprit',         'Evora',                'Express 1500',
  'Familia',        'Fortwo',               'G35',
  'GTO',            'Galant',               'Intrepid',
  'Jetta',          'LSS',                  'MR2',
  'Magnum',         'Miata MX-5',           'Montero Sport',
  'Mustang',        'Navigator',            'Prizm',
  'Q',              'Q7',                   'R-Class',
  'Ram Van 1500',   'Ram Van 3500',         'Sebring',
  'Skylark',        'TT',                   'Talon',
  'Topaz',          'Town Car',             'Windstar',
  'Wrangler',       'Wrangler',             'XC70',
  'Yukon',          'riolet'
];