export function InputButton ({valor, setNota}){
    function handleTrocarNota(nota) {
        setNota(nota)
   
        console.log(nota)
     }

    return (
        <input type="button" value={valor} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold flex focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white sm:w-13 sm:h-13" onClick={() => handleTrocarNota(valor)}/>
    )
}