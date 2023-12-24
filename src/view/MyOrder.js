import React, { useEffect, useState } from 'react' 
import Order from '../components/Order'

export default function MyOrder() {

    const [myOrderData, setMyOrderData] = useState(null);

    useEffect(() => {
        // Make the API call and set the data in the state
        // For example, using fetch or axios
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:4000/api/myOrderData", {
                // credentials: 'include',
                // Origin:"http://localhost:3000/login",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email:localStorage.getItem('userEmail')
                })
            }) 
            const data = await response.json();
            setMyOrderData(data.orderData);
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
        <div>
          {myOrderData ? (
            <Order orderData={myOrderData} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
}
// {"orderData":{"_id":"63024fd2be92d0469bd9e31a","email":"mohanDas@gmail.com","order_data":[[[{"id":"62ff20fbaed6a15f800125e9","name":"Chicken Fried Rice","qty":"4","size":"half","price":520},{"id":"62ff20fbaed6a15f800125ea","name":"Veg Fried Rice","qty":"4","size":"half","price":440}],"2022-08-21T15:31:30.239Z"],[[{"id":"62ff20fbaed6a15f800125f4","name":"Mix Veg Pizza","qty":"4","size":"medium","price":800},{"id":"62ff20fbaed6a15f800125f3","name":"Chicken Doub;e Cheeze Pizza","qty":"4","size":"regular","price":480}],"2022-08-21T15:32:38.861Z"]],"__v":0}}