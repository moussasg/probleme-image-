import React from 'react'
export default function But({OurProps}) {
    const handleclick = e => {
        e.preventDefault()
        alert(OurProps.nom)
    }
  return (
    <>
    <button onClick={handleclick}> clique </button>
    </>
  )
}
