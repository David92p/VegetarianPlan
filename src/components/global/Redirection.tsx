import React from 'react'
import { useNavigate } from 'react-router-dom'

type RedirectionType = {
	type: "ingredients" | "recipes" | "planner"
}

const Redirection:React.FC<RedirectionType> = ({ type }) => {
	const navigate = useNavigate()
  return (
    <div>
      <div className='flex flex-col bg-mygreen'>
				<span className='text-center text-mypink text-3xl sm:text-5xl 2xl:text-7xl mx-auto mt-4'>
					Other sections dedicated<br/>for you
				</span>
				<div className='flex justify-around 2xl:justify-center 2xl:gap-40 items-center w-full h-24 sm:h-36 2xl:h-44'>
					{
						type == "ingredients" && (
							<>
								<button className='bg-mypink h-10 sm:w-40 px-2' onClick={() => navigate("/ingredienti/ricettario")}>Recipes</button>
								<button className='bg-mypink h-10 sm:w-40 px-4' onClick={() => navigate("/ricettario/pianifica")}>Planner</button>
							</>
						)
					}
					{
						type == "recipes" && (
							<>
								<button className='bg-mypink h-10 sm:w-40 px-2' onClick={() => navigate("/ricettario/ingredienti")}>Ingredients</button>
								<button className='bg-mypink h-10 sm:w-40 px-4' onClick={() => navigate("/ricettario/pianifica")}>Planner</button>
							</>
						)
					}
					{
						type == "planner" && (
							<>
								<button className='bg-mypink h-10 sm:w-40 px-2' onClick={() => navigate("/pianifica/ingredienti")}>Ingredients</button>
								<button className='bg-mypink h-10 sm:w-40 px-4' onClick={() => navigate("/pianifica/ricettario")}>Recipes</button>
							</>
						)
					}
				</div>
			</div>
    </div>
  )
}

export default Redirection
