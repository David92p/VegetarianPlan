
import { useState } from 'react'
import { Diet, Exclude, FoodPlan, Header, Start, TargetCalories, TimeFrame } from '.'
import { Redirection } from '../global'

type SequencesType = {
	start: boolean,
	timeFrame: boolean, 
	targetCalories: boolean, 
	diet: boolean, 
	exclude: boolean
  foodPlan: boolean
}

type Key = "timeFrame" | "targetCalories" | "diet" | "exclude" 
export type SequenceType = {
	toggleSequence: (nextSequence: "timeFrame" | "targetCalories" | "diet" | "exclude" | "foodPlan") => void
  updatedPlan?: (key: Key, value: string | number) => void
}

export type PlanParametersType = {
  timeFrame: string,
  targetCalories: string,
  diet: string,
  exclude: string,
}


const Planner:React.FC = () => {

	const [sequences, setSequence] = useState<SequencesType>({
		start: true,
		timeFrame: false, 
		targetCalories: false, 
		diet: false, 
		exclude: false,
    foodPlan: false
	})

  const [plannerData, setPlannerData] = useState<PlanParametersType>({
      timeFrame: "",
      targetCalories: "",
      diet: "",
      exclude: "",
    })
  
  const toggleSequence = (nextSequence: "start" | "timeFrame" | "targetCalories" | "diet" | "exclude" | "foodPlan" ) => {
		const newSequence:SequencesType =	{
			start: false,
			timeFrame: false, 
			targetCalories: false, 
			diet: false, 
			exclude: false,
      foodPlan: false
		}
		newSequence[nextSequence] = true
		setSequence(newSequence)
	}

  
	const updatedPlan = (key:Key, value: string | number ) => {
    setPlannerData((prev) => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  return (
    <div className='flex flex-col' style={{fontFamily: "Salsa"}}>
      <Header/>
      <div className='flex items-center cursor-grab activer:cursor-grabbing bg-mygreen'>
        {sequences.start && <Start toggleSequence={toggleSequence}/>} 
        {sequences.timeFrame && <TimeFrame toggleSequence={toggleSequence} updatedPlan={updatedPlan}/>}
        {sequences.targetCalories && <TargetCalories toggleSequence={toggleSequence} updatedPlan={updatedPlan}/>}
        {sequences.diet && <Diet toggleSequence={toggleSequence} updatedPlan={updatedPlan}/>} 
        {sequences.exclude && <Exclude toggleSequence={toggleSequence} updatedPlan={updatedPlan}/>} 
        {sequences.foodPlan && <FoodPlan parameters={plannerData} toggleSequence={toggleSequence}/>} 
      </div>
      <Redirection type="planner" />
    </div>
  )
}

export default Planner
