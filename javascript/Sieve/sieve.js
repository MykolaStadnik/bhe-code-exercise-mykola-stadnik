/**
 * Class representing a Sieve of Eratosthenes for generating prime numbers.
 */
class Sieve {
  /**
   * Create a Sieve instance.
   */
  constructor() {
    this.primes = [];
  }

  /**
   * Get the nth prime number.
   * @param {number} n - The index of the prime number to retrieve.
   * @returns {number} - The nth prime number.
   */
  NthPrime(n) {
    // Check if we already have the nth prime in our primes list
    if (this.primes.length > n) {
      return this.primes[n];
    }

    // Define an initial limit to generate primes
    let limit = 1000000;
    while (this.primes.length <= n) {
      // Generate primes up to the current limit
      this.primes = this.sieveOfEratosthenes(limit);
      // Double the limit if we need more primes
      limit *= 2;
    }

    // Return the nth prime
    return this.primes[n];
  }

  /**
   * Generate prime numbers up to a given limit using the Sieve of Eratosthenes.
   * @param {number} limit - The upper limit for generating primes.
   * @returns {number[]} - An array of prime numbers up to the limit.
   */
  sieveOfEratosthenes(limit) {
    // Create an array to mark the prime status of each number
    let isPrime = Array(limit).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime

    // Sieve of Eratosthenes algorithm
    for (let i = 2; i * i < limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j < limit; j += i) {
          isPrime[j] = false; // Mark multiples of i as not prime
        }
      }
    }

    // Collect all prime numbers
    let primes = [];
    for (let i = 2; i < limit; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }

    return primes;
  }
}

module.exports = new Sieve();