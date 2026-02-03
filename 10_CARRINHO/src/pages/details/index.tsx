import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useParams } from "react-router-dom"

interface DetailsProps {
    id: number,
    title: string,
    description: string,
    price: number,
    cover: string
}

export function Details() {
    const {id} = useParams()
    const [details, setDetails] = useState<DetailsProps | null>(null) 

    useEffect(() => {
        async function getDetails() {
            const response = await api.get(`/products/${id}`)
            setDetails(response.data)
            console.log(response.data)
        }
        getDetails()
    },[])

    return(
      <div className="w-full">
        <section key={details?.id} className="flex flex-row">
            <img className="h-80"  
            src={details?.cover} 
            alt={details?.title} />

            <div >
            <h1 className="mb-2 mt-4 font-bold text-2xl">{details?.title}</h1>
            <p className="mb-2">{details?.description}</p>
            <p>{details?.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}</p> 
            </div>
        </section>
     </div>
    )
}