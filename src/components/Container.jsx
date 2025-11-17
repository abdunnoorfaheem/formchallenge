import React from 'react'

const Container = ({children,className}) => {
  return (
    <>
     <div className={`${className} max-w-[1320px] m-auto`}>{children}</div> 
    </>
  )
}

export default Container
