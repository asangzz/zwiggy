import React, { useEffect, useState } from 'react' 
import RestaurantOrders from '../components/RestaurantOrder'

export default function RestaurantOrder() {

    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        // Make the API call and set the data in the state
        // For example, using fetch or axios
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:4000/api/restaurantOrderData", {
                // credentials: 'include',
                // Origin:"http://localhost:3000/login",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    restaurantId:localStorage.getItem('restaurantID')
                })
            }) 
            const data = await response.json();
            setOrderData(data.orderData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    // const fetchMyOrder = async () => {
    //     console.log(localStorage.getItem('userEmail'))
        // await fetch("http://localhost:4000/api/myOrderData", {
        //     // credentials: 'include',
        //     // Origin:"http://localhost:3000/login",
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({
        //         email:localStorage.getItem('userEmail')
        //     })
        // }).then(async (res) => {
        //     let response = await res.json()
        //     await setorderData(response)
        // })



    //     // await res.map((data)=>{
    //     //    console.log(data)
    //     // })


    // }

    // useEffect(() => {
    //     fetchMyOrder()
    // }, [])

    return (
        <div className='container-fluid'>
          {orderData ? (
            <RestaurantOrders orderData={orderData} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
}



// import React, { useEffect, useState } from 'react' 
// import OrderCard from '../components/RestaurantOrderCard'

// export default function RestaurantOrder() {

//     const [orderData, setorderData] = useState( [[]] )

//     const fetchMyOrder = async () => {
//         console.log(localStorage.getItem('restaurantEmail'))
//         await fetch("http://localhost:4000/api/restaurantOrderData", {
//             // credentials: 'include',
//             // Origin:"http://localhost:3000/login",
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify( 
//                  {restaurantId :localStorage.getItem('restaurantID') } 
//          )
//         }).then(async (res) => {
//             let response = await res.json()
//             // let orders = response.order_data;
//             setorderData(response.orderData)
//             console.log("OD",orderData)
//         })



//         // await res.map((data)=>{
//         //    console.log(data)
//         // })


//     }

//     useEffect(() => {
//         fetchMyOrder()
//     }, [])

//     return (
//         <div>
//             <div>
                
//             </div>

//             <div className='container'>
//                 <div className='row'>

//                     {orderData != {} ? Array(orderData).map(data => {
//                         return (
//                             data.orderData ?
//                                 data.orderData.order_data.slice(0).reverse().map((item) => {
//                                     return (
//                                         item.map((arrayData) => {
//                                             return (
//                                                 <div  >
//                                                     {arrayData.Order_date ? <div className='m-auto mt-5'>

//                                                         {data = arrayData.Order_date}
//                                                         <hr />
//                                                     </div> :

//                                                         <div className='col-12 col-md-6 col-lg-3' >
//                                                             <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                                 <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                                                 <div className="card-body">
//                                                                     <h5 className="card-title">{arrayData.name}</h5>
//                                                                     <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                                         <span className='m-1'>{arrayData.qty}</span>
//                                                                         <span className='m-1'>{arrayData.size}</span>
//                                                                         <span className='m-1'>{data}</span>
//                                                                         <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//                                                                             ₹{arrayData.price}/-
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>



//                                                     }

//                                                 </div>
//                                             )
//                                         })

//                                     )
//                                 }) : ""
//                         )
//                     }) : ""}
//                 </div>


//             </div>

        
//         </div>
//     )
// }
 