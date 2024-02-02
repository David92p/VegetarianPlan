import React, { useEffect, useState } from 'react'
import { getCardsRecipes } from '../async'
import { Research, Carousel, Loading, Error, CardType } from '../global'
import { MainRecipes } from '.'


const Recipes:React.FC = () => {

  const [cards, setCards] = useState<CardType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    getCardsRecipes(import.meta.env.VITE_APP_API_KEY, 9)
    .then((res:CardType[] | null) => {
      res ? setCards(res) : setIsError(true)
      setIsLoading(false)
    })

  }, [])

  return (
    <div className='flex flex-col w-full bg-mygreen'>     
      {
        isError 
        ? <Error/> 
        : (
          <>
            <Research type={"una ricetta"} />
            { isLoading ? <Loading/> : <Carousel cards={cards} /> }
            <MainRecipes />
          </>
        )
      }
    </div>
  )
}

export default Recipes
