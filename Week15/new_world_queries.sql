SELECT Name
FROM Country
WHERE Population >= '8000000';

SELECT Name
FROM Country
WHERE Name LIKE '%land';

SELECT Name
FROM Country
WHERE Name LIKE '%land%';

SELECT Name
FROM city
WHERE Population >= '500000' AND Population <= '1000000';

SELECT Name
FROM country
WHERE Continent = 'Europe';

SELECT Name, SurfaceArea
FROM country
ORDER BY SurfaceArea DESC;

SELECT city.Name, country.Name
FROM city
INNER JOIN country ON city.CountryCode=country.Code
WHERE country.Name = 'Netherlands';

SELECT Population
FROM city
WHERE Name = 'Rotterdam';

SELECT Name, SurfaceArea
FROM country
ORDER BY SurfaceArea DESC limit 0,10;

SELECT Name, Population
FROM city
ORDER BY Population DESC limit 0,10;

SELECT SUM(Population) AS Population FROM country;
