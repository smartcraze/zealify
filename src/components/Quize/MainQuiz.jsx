import React from 'react'
import { DataProvider } from '../../context/dataContext'
import Start from './Start'
import Quiz from './Quiz'
import Result from './Result'

function MainQuiz() {
  return (
    <DataProvider>
      {/* Welcome Page */}
      <Start/>

      {/* Quiz Page */}
      <Quiz/>

      {/* Result Page */}
      <Result/>

    </DataProvider>
  )
}

export default MainQuiz
