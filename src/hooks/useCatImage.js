import { useEffect, useState } from 'react'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

// creamos un custom hook para poder reutilizar la lógica. Para que React lo reconozca tiene que empezar por use.
export function useCatImage ({ fact }) { // como abajo nos dice que necesitamos el fact se lo pasamos como parámetro. Lo ponemos entre {} porque es una buena práctica, así es extensible por si queremos pasarle más cosas en el futuro.
  // necesitamos meter aquí el estado y el efecto, así que lo cortamos abajo y lo pegamos aquí.
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return // abajo ponemos que se ejecute este useEffect cada vez que haya un fact, pero tenemos que decir que lo haga si hay un fact y no es null

    const firstWord = fact.split(' ')[0]
    // console.log(firstWord)
    // Si quisiéramos recuperar las tres primeras palabras:
    // const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    // console.log(firstWord, threeFirstWords)

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
        // setImageUrl(`https://cataas.com${url}`)
        // En lugar de hacer la concatenación de la url aquí hacerla fuera. En el estado tenemos que tener la mínima información posible.
      })
  }, [fact]) // este useEffect se ejecutará cada vez que cambie el fact

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` } // para que devuelva algo. Devuelve un objeto que es la imageUrl
}
