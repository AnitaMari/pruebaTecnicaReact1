const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json() // tienes que hacer un await aquí porque también hay una promesa.
  const { fact } = data
  return fact
}

// sin sync await:
// export const getRandomFact = () => {
//   return fetch(CAT_ENDPOINT_RANDOM_FACT) //el fetch devuelve una promesa que se resuelve con await o con el then
//     .then(res => res.json()) //devuelve una promesa. La promesa se resuelve con el then. Estamos encadenándolas. Se usaría un catch en lugar de un then si hay un reject
//     .then(data => {
//       const { fact } = data
//       return fact
//     })
// }
