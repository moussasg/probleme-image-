export default function Hand({OurProp}) {
    const handleclick = (e) => {
        e.preventDefault(); // pour modifier comortement par défault
        console.log({OurProp})
      }  
  return (
    <>
    <button onClick={handleclick}>Click Me </button>
    </>
  )
}
  
  