import React from 'react'
import { useData } from './DataProvider'

export default function ChildComponent() {

  const data = useData(); 

  return (

    <div> {data.data1} </div >


  )

}
