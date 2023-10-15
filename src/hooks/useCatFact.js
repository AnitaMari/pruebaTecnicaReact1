import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => { // este método sirve para recuperar nuevos datos/facts y actualizar el estado interno
    getRandomFact().then(newFact => setFact(newFact)) // lo extraemos. Esto extrae el random fact y actualiza el estado
  }

  useEffect(refreshFact, [])
  // useEffect(() => { // para recuperar el fact o la cita al cargar la página
  // getRandomFact().then(newFact => setFact(newFact)) // lo extraemos. Esto extrae el random fact y actualiza el estado
  // }, [])

  return { fact, refreshFact }
}
