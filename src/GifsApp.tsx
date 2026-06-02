import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

    const {gifs, handleSearch, previousTerms, handleTermClicked} = useGifs()

    return (
        <>
            {/*Header*/}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gig perfecto" />

            {/*Search*/}
            <SearchBar
                placeholder="Busca lo que quieras" 
                // handleSearch={(query:string)=>handleSearch(query)} esto es lo mismo que abajo 
                onQuery={handleSearch}    
            />

            {/*Búsquedas Previas*/}
            {/*PreviousSearches*/}
            <PreviousSearches searches={previousTerms} onLabelClicked={(term: string) => handleTermClicked(term)} />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>
    )
}