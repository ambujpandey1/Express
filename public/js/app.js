const App=() =>{

const [products, setOroduct]=React.useState([]);



React.useEffect(()=>{
  fetchProduct()
},[])


function fetchProduct(){
    fetch('api/products')
    .then((res)=>res.json())
    .then(Data =>{
        console.log(Data);
        //setProduct
        setOroduct(data);
    });
}


    return (
<ul className="list-group">
 
  {
    products.map((product)=><li className="list-group-item">{product.name}</li> )

  }
   

</ul>
    );
}


ReactDOM.render(<App/>,document.getElementById('app'));


