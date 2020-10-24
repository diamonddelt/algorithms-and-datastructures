# Memoization

What is this weird word? The TL;DR is:

1. To memoize a function, you store the arguments of each function call, along with the result
2. If the function is called again with the `same` arguments as a previous invokation, you return the pre-computed result, rather than computing it again
3. The intent of memoization is to `improve runtime efficiency` by storing potentially duplicated function call results
4. A prototypical use-case is to save performance when a recursive algorithm is called (i.e. a recursive fibonnaci function)