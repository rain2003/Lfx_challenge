*prime number generator using the Sieve of Eratosthenes*
let sieve n =
  let is_prime = Array.make (n + 1) true in
  for p = 2 to n do
    if is_prime.(p) then
      for i = p * p to n step p do
        is_prime.(i) <- false
      done
  done;
  List.filter (fun x -> is_prime.(x)) (List.init (n + 1) (fun x -> x))

let () =
  let n = 100 in
  let primes = sieve n in
  Printf.printf "Prime numbers up to %d:\n" n;
  List.iter (fun prime -> Printf.printf "%d " prime) primes;
  Printf.printf "\nTotal number of prime numbers: %d\n" (List.length primes)
