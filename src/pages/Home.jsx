import { Card } from "../components/Card"
import { Header } from "../components/Header"
import { data } from "../data/data"

import { Link } from 'react-router-dom'

export function Home(){
  return(
    <>
      <Header />
      <div className="grid grid-cols-1 grid gap-4 w-full px-5">
        {
          data.map((value) => (
            <Link to={`/products/${value.id}`} key={value.id}>
              <Card key={value.id} title={value.title} price={value.price} />
            </Link>
          ))
        }
      </div>
    </>
    
  )
}