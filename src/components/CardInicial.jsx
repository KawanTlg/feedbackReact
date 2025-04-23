import iconStar from "../assets/icon-star.svg"
import { InputButton } from "./InputButton"

export function CardInicial ({nota, setNota, setSubmited}) {

  
  function handleSubmit() {
    if (nota !== 0){
      setSubmited(true)
      return
    }

    alert ("Please, select a rate button")
  }


    return(
        
     <div className="max-w-103 bg-gradient-dark p-6 rounded-2xl text-white font-overpass">
      <div className="max-w-103 bg-dark-blue p-4 w-fit rounded-full mb-4">
        <img src={iconStar} alt="icon star" />
      </div>

      <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
      <p className="text-sm text-light-grey mb-6">Please let us know how did with your support request. All feedback is appreciated to help us improve our offering!</p>

      <div className="flex justify-between mb-6">
        <InputButton valor={1} setNota={setNota} />
        <InputButton valor={2} setNota={setNota} />
        <InputButton valor={3} setNota={setNota} />
        <InputButton valor={4} setNota={setNota} />
        <InputButton valor={5} setNota={setNota} />
      </div>

      <button onClick={handleSubmit} className="max-w-103 bg-orange w-full py-3 rounded-3xl uppercase text-sm tracking-1 font-bold hover:bg-white hover:text-orange cursor-pointer">Submit</button>
    </div>
    )
}