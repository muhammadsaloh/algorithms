const books = [
    { title: 'Clean Code', year: 2008, rating: 8.2 },
    { title: 'Code Complete, 2nd edition', year: 1993, rating: 9.3 },
    { title: 'Design Pattern', year: 1994, rating: 7.1 },
    { title: 'Soft Skills', year: 2004, rating: 8.2 },
    { title: 'Refactoring, 2nd edition', year: 2018, rating: 9.7 },
    { title: 'The Pragmatic Programmer', year: 2008, rating: 8.2 },
    { title: 'Introduction to Algorithms, 3rd edition', year: 2009, rating: 7.7 },
    { title: 'Working Effectivetely with Legacy Code', year: 2004, rating: 6.9 }
];

let result = books
    .filter(b => b.year > 2010 && b.rating > 8)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(b => b.title)

console.log(result);