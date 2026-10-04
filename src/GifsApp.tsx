import { useState } from 'react';
import { GifList } from './gifs/GifList';
import { PreviousSearches } from './gifs/PreviousSearches';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string = '') => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));
  };
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <PreviousSearches
        title="Búsquedas previas"
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
