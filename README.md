# cachedTable
Minimalist table in localstorage. Supports simple queries and CRUD (as of now, only CRU and delete all). Mainly created for use in my other webapp, felice. Basically creates a database-like layer over localstorage. I might finish this later after finishing felice since I have implemented all that I need to get felice to work. Big O of implemented functions: Let n be the number of columns. Then, the insert row method is O(n) (efficient for small number of columns). The get row method is linear time as well, but dependent on the number of rows that match your query (efficient for not too many duplicates). Do not use this for large storage (localstorage can hold a max of 10MB of data). This is only efficient for small datasets.
There are probably better implementations of this, just made this to cater to my needs for felice.
###Methods
| Method        | Args          | Description  |
| ------------- |---------------|--------------|
| will add soon |               |  |
