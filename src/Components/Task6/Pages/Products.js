import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Products.module.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {add} from '../store/cartSlice'
import {fetchProducts} from '../store/fetchDataSlice'
import {useSelector} from 'react-redux'


function Products() {
  
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    
    dispatch(fetchProducts())
  }
  ,[]
  )
  
  const product = useSelector((state)=>state.productData)
  
  

  
  
  function handleAdd(Data)
  {
    //product which is clicked , we want to store that product in Redux Store
    dispatch(add(Data))

  }
  return (
    <div>
        <div className={styles.search}>
        <h5>
          Search by categories:
        </h5>
        <button >
          Shoes
        </button>
        <button>
          Jacket 
        </button>
        <button>
          jewelery

        </button>
        </div>
      <div className={styles.container}>

    {
      
     product.data.map((Data)=>
      

        <Card className={styles.item1} 
        style={{ width: '18rem' ,backgroundColor:"white" , borderRadius:"20px" ,textDecoration:"none"}}  
        key={Data.id} 
        >

          <Card.Img variant="top" 
      
          src={Data.image} 
          style={{width:"10rem" ,height:"10rem" ,margin:"auto"}}
          />
          <Card.Body>

            <Card.Title className={styles.title}
            style={{fontSize:"18px" , fontWeight:"700" ,color:"black", textDecoration:"none" }} 
            as={Link} 
            to={`/store/productdetail/${Data.id}`}>
            {Data.title}
            </Card.Title>

            <Card.Text style={{fontSize:"30px" , color:" #6666ff" , fontWeight:"800" , textAlign:"center"}}>
            $
            {
              Data.price
            }
            
            </Card.Text>
            <div className="d-grid gap-2">
          <Button 
          style={{backgroundColor:"#6666ff" , fontWeight:"700"}} 
          size="lg" 
          onClick={()=>{handleAdd(Data)}}  >
            Add to Cart
          </Button>
          </div>
          </Card.Body>
        </Card>
        
        

        
      )
    }
    </div>
    </div>
  );
}

export default Products;