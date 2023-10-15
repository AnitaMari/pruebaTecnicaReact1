// import { useEffect, useState } from 'react' // ya no hace falta aquí
import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
// import { Otro } from './Components/Otro.jsx'
// import { getRandomFact } from './services/facts.js' // ya no hace falta aquí

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com' // lo ponemos en el CH de useCatImage para concatenar ahí la url

export function App () {
  // const [fact, setFact] = useState() // lo metemos arriba en el custom hook
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact }) // una vez que hacemos el custom hook arriba. Devuelve el imageUrl pasándole el fact. Poner debajo de la otra constante que tiene el fact que le pasamos aquí.
  // const [imageUrl, setImageUrl] = useState() // lo pusimos arriba
  // const [factError, setFactError] = useState()

  // Fetch inicial del fact
  // useEffect(() => {
  //   fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     .then(res => res.json())
  //     .then(data => setFact(data.fact))
  // }, [])

  // para recuperar la cita al cargar la página
  // useEffect(() => { // lo metemos arriba en el custom hook
  // esto lo hice antes de extraer la lógica y ponerla en facts.js
  // fetch(CAT_ENDPOINT_RANDOM_FACT)
  //   .then(res => res.json())
  // Para manejar errores. Pero me decía que el FactError no lo había usado
  // .then(res => {
  //   if (!res.ok) {
  //     setFactError('No se ha podido recuperar la cita')
  //   }
  //   return res.json()
  // })
  //   .then(data => {
  //     const { fact } = data
  //     setFact(fact)
  //   })
  // getRandomFact().then(newFact => setFact(newFact))
  // Al principio puso setFact y funcionaba igual, pero dijo que era mala práctica. Es importante saber que las funciones se pueden pasar como parámetros.
  // }, [])

  // para recuperar la imagen cada vez que tenemos una cita nueva
  // useEffect(() => { // lo pasamos arriba al custom hook
  //  if (!fact) return // abajo ponemos que se ejecute este useEffect cada vez que haya un fact, pero tenemos que decir que lo haga si hay un fact y no es null

  //  const firstWord = fact.split(' ')[0]
  // console.log(firstWord)
  // Si quisiéramos recuperar las tres primeras palabras:
  // const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
  // console.log(firstWord, threeFirstWords)

  // fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
  //   .then(res => res.json())
  //   .then(response => {
  //     const { url } = response
  //     setImageUrl(url)
  // setImageUrl(`https://cataas.com${url}`)
  // En lugar de hacer la concatenación de la url aquí hacerla fuera. En el estado tenemos que tener la mínima información posible.
  //    })
  // }, [fact]) // este useEffect se ejecutará cada vez que cambie el fact

  const handleClick = async () => {
    // const newFact = await getRandomFact() // estas dos líneas se cambiaron después del custom hook
    // setFact(newFact)
    // estas dos líneas de arriba incluso se podrían poner en un método.
    refreshFact() // cuando hacemos click en el botón pedimos que se actualice el estado interno de este custom hook
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {/* renderizado condicional */}
        {/* {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first word from ${fact}`} />} No hace falta concatenar la url aquí porque lo hemos hecho en el custom hook */}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word from ${fact}`} />}
        {fact && <p>{fact}</p>}
      </section>
      <button onClick={handleClick}>Get new fact</button>

      {/* creamos este componente para reutilizar la lógica del custom hoom useCatImage y mostrar más imágenes cada vez que se renderice en componente. */}
      {/* <Otro />
      <Otro /> */}
    </main>
  )
}
