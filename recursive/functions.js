module.exports = {
    factorial: fac = (n) => {
        if (n == 0)
            return 1;
        else return n * fac(n - 1);
    },
    fibonacci: fib = (n) => {
        if (n == 0)
            return 0;
        else if (n == 1)
            return 1;
        else return fib(n - 1) + fib(n - 2);
    }
}

