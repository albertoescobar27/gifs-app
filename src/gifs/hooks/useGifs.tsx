import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
  
    const [gifs, setgifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    //crea espacio en memoria que no causa renders
    //y mantiene el estado a lo largo de diferentes re-renders
    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async(term: string) => {
        
        if (gifsCache.current[term]) {
            setgifs(gifsCache.current[term])
            return
        }
        
        const gifs = await getGifsByQuery(term)
        setgifs(gifs)
    }

    const handleSearch = async(query: string = '') => {

        //convertir query a minusculas y evitar espacios en blanco
        query = query.trim().toLowerCase()
        
        //validar que el query no este vacio 
        if (query.length === 0) {
            return
        }

        //Evitar busquedas duplicadas verificando si el termino ya existe en previous term (si existe no hacer nada)
        if(previousTerms.includes(query)) return;

        //Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
        setPreviousTerms([query, ...previousTerms].splice(0,7))

        const gifs = await getGifsByQuery(query)
        setgifs(gifs)

        gifsCache.current[query] = gifs;

        console.log(gifsCache)
    }

    return {
        //props
        gifs,

        //methods o acciones
        handleSearch,
        previousTerms,
        handleTermClicked,
    }
    
}
