-- get the sum of the prices, grouped by date, only for groups that have a price sum over 20

SELECT SUM(price), purchased_at
FROM purchases
GROUP BY purchased_at
HAVING SUM(price) > 20
;