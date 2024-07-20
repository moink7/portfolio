
import Front from '@/pages/Front'
import React from 'react'
import {Suspense} from "react";


const page = () => {
  return (
    <>
    <Suspense fallback={<>Loading...</>}>
      <Front />
    </Suspense>
      
    </>
    
    
  )
}

export default page