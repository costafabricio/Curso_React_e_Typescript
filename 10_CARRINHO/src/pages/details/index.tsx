import { useEffect, useState, useContext } from "react"
import { api } from "../../services/api"
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContexts";
import toast from "react-hot-toast";
import { type ProductProps } from "../home";

export function Details() {
    const {id} = useParams()
    const [product, setProduct] = useState<ProductProps>() 
    const {addItemCart} = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        async function getDetails() {
            const response = await api.get(`/products/${id}`)
            setProduct(response.data)
            console.log(response.data)
        }
        getDetails()
    },[id])

     function handleAddCartItem(product: ProductProps){
        toast.success("Produto adicionado no carrinho")

       addItemCart(product)
       navigate("/cart")
    }

    return(
        <div>
          <main className="w-full max-w-7xl px-4 mx-auto my-6">

            {product && (
             <section className="w-full">

                <div className="flex flex-col lg:flex-row">

                   <img className="flex-1 w-full max-h-72 object-contain"  
                   src={product?.cover} 
                   alt={product?.title}/>
            
                  <div className="flex-1">
                      <h1 
                        className="mb-2 mt-4 font-bold text-2xl">{product?.title}
                      </h1>
                       <p className="mb-2">{product?.description}</p>
                      <strong className="text-zinc-700/90 text-xl">
                        {product?.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"})}
                      </strong> 

                      <button className="bg-zinc-900 p-1 rounded ml-3" 
                        onClick={() => handleAddCartItem(product)}>
                        <BsCartPlus size={20} color="#FFF"/>
                      </button>

                  </div>

              </div>
          </section>
         )}
    </main>
  </div>
  )
}