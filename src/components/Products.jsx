import { useEffect, useState } from 'react'
import '../App.css'
function Products() {
    const [ products , setProducts ] = useState([]);
    const [ searchInput , setSearchInput] = useState('');

    useEffect(()=>{

        async function products_fn(){
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }

        products_fn();

    },[])
    console.log(products);
  return (<div>
          <input type="text" placeholder='search for ..' onChange={(e)=>{
        setSearchInput(e.target.value);
      }} />
    <div className = "main">
      {
        products?.filter(res => {
          return res.title.toLowerCase().includes(searchInput.toLocaleLowerCase())
        }).map( (res , index) => {
          return(
            <div className='sub_main' key={index}>
              <img width='70%' src={res?.image}/>
              <h5>{res?.title}</h5>
              <p>{res?.description.slice(0,100)+[res?.description.length > 100 ? 'Read more ' : ' ']}</p>
              <p className='p_price'>{res?.price}</p>
            </div>
          )
        })
      }
    </div>
  </div>


  )
}

export default Products