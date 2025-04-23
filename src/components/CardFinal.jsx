import illustrationThankYou from "../assets/illustration-thank-you.svg"

export function CardFinal ({ nota }) {
    return (
     <div className="max-w-103 bg-gradient-dark p-6 rounded-2xl text-white font-overpass text-center">
       <img className="mx-auto mb-6" src={illustrationThankYou} alt="illustration thank you" />
       <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl text-sm">You selected {nota} out of 5</p>
       <h1 className="text-2xl font-bold mb-2.5">Thank You</h1>
       <p className="text-sm text-light-grey mb-6">Please let us know how did with your support request. All feedback is appreciated to help us improve our offering!</p>
     </div>
    )
}