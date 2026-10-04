import { GifList } from './gifs/GifList';
import { PreviousSearches } from './gifs/PreviousSearches';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" />

      {/* Búsquedas previas */}
      <PreviousSearches
        title="Búsquedas previas"
        searches={['Goku', 'Dragon Ball Z']}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
