const armata = {
    searchTerms: ['t14', 't-14', 'armata', 'russian', 'uralvagonzavod', 'ru'],
    name: 'T-14 Armata',
    origin: 'Russian Federation',
    weight: 48,
    manufacturer: 'Uralvagonzavod',
    speed: 50,
    caliber: 125
}

const abrams = {
    searchTerms: ['m1', 'm1a2', 'abrams', 'american', 'gd', 'general dynamics', 'usa'],
    name: 'M1A2 Abrams',
    origin: 'United States of America',
    weight: 70,
    manufacturer: 'General Dynamics',
    speed: 42,
    caliber: 120
}

const challenger = {
    searchTerms: ['fv4034', 'challenger 2', 'british','bae'],
    name: 'FV4034 Challenger 2',
    origin: 'United Kingdom',
    weight: 75,
    manufacturer: 'BAE',
    speed: 37,
    caliber: 120
}
const rule1 = 'No results found.';
const rule2 = 'Searches do not need to be case sensitive.';
const rule3 = 'You can search names, manufacturer, or country of origin.';
const rule4 = 'Even incomplete words are acceptable!';
const fail = [rule1, rule2, rule3, rule4];
const data = [armata,abrams,challenger];