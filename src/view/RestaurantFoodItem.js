import React, {useEffect,useState} from 'react'
import FoodCard from '../components/FoodCard'
import { Link, useNavigate,useParams } from 'react-router-dom';

export default function RestaurantFoodItem() {
  const { id } = useParams();

  const [foodRestaurentCategory, setRestaurentFoodCategory] = useState([]);
  const [foodRestaurentItem, setRestaurentFoodItem] = useState([]);

  const loadRestaurentData = async () => {
    let response = await fetch(`http://localhost:4000/api/fooditemid`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
       restaurantId: id
      })
    });
    const restaurentData = await response.json()
    console.log("first response",response)

    setRestaurentFoodItem(restaurentData[0])
    setRestaurentFoodCategory(restaurentData[1])

    console.log(restaurentData[0], restaurentData[1])
  }

  useEffect(()=>{
    loadRestaurentData() 
  },[])
   
  return (
    <div className='container'>
      {foodRestaurentItem.length !== 0 ? foodRestaurentCategory.map((data) => {
        // Filter items for the current category
        const itemsForCategory = foodRestaurentItem.filter((item) => item.CategoryName === data.CategoryName);
  
        // Check if there are items for the category
        if (itemsForCategory.length > 0) {
          return (
            <div className='row mb-3 ' key={data._id}>
              <div className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {itemsForCategory.map((filterItems) => (
                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                  
                  <FoodCard
                    foodItem={filterItems}
                    options={filterItems.options[0]}
                  ></FoodCard>
                </div>
              ))}
            </div>
          );
        } else {
          // No items for the category, don't render the heading
          return null;
        }
      }) : <div>No Food items availble</div>}
    </div>
  );
}
