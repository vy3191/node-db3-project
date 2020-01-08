-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName, c.CategoryName
FROM Product AS p
INNER JOIN Category AS c ON p.CategoryId = c.Id
ORDER BY p.ProductName ASC;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.id, s.CompanyName
FROM "Order" as o
INNER JOIN Shipper as s
WHERE o.OrderDate < "2012-08-09"
ORDER BY s.CompanyName asc;
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, o.Quantity
FROM Product AS p
INNER JOIN OrderDetail AS o ON p.Id = o.ProductID
WHERE o.OrderID = 10251
ORDER BY p.ProductName ASC;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.id, e.LastName, c.CompanyName
FROM Customer AS c
INNER JOIN "Order" AS o ON c.Id = o.CustomerId
INNER JOIN Employee AS e ON e.id = o.EmployeeID;