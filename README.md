# cachedTable
Minimalist table in localstorage. Supports simple queries and CRUD (as of now, only CRU and delete all). Mainly created for use in my other webapp, felice. Basically creates a database-like layer over localstorage. I might finish this later after finishing felice since I have implemented all that I need to get felice to work. Big O of implemented functions: Let n be the number of columns. Then, the insert row method is O(n) (efficient for small number of columns). The get row method is linear time as well, but dependent on the number of rows that match your query (efficient for not too many duplicates). Do not use this for large storage (localstorage can hold a max of 10MB of data). This is only efficient for small datasets.
###Design philosophy
I did not use some sort of implementation like: http://www.codeproject.com/Articles/867903/Storing-Database-Tables-in-JavaScripts-Local-Stora because I want as fast lookup as possible for my database, especially since felice in essence just graphs large datasets and does some minimal analyses on them.
###Methods
| Method        | Args          | Description  |
| ------------- |---------------|--------------|
| will add soon |               |  |
