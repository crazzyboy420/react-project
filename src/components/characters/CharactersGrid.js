import React from 'react'
import CharacterItem from './CharacterItem'
import Loading from '../ui/Loading'
const CharactersGrid = ({ items, isLoading }) => {
    return isLoading ? (
      <Loading />
    ) : (
      <section className='cards'>
        {items.map((item) => (
          <CharacterItem key='char_id' item={item} />
        ))}
      </section>
    )
  }

export default CharactersGrid
