import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { data } from "../data/data"


export function Products(){
  const { id } = useParams()

  const result = data[id-1]

  console.log(result)

  
  return(
    <h1>
      {result.title}
    </h1>
  )
}