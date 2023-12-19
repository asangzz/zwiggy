import React, {useEffect, useState} from 'react'  
import Card from '../components/Card'
import RestaurantCard from '../components/RestaurantCard';

export default function Home() {

  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const [restaurants, setrestaurants] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:4000/api/fooditem',{
      method:"GET",
      header:{
        'Content-Type':'application/json'
      }
    });
    response = await response.json()

    setFoodItem(response[0])
    setFoodCategory(response[1])

    console.log(response[0], response[1])
  }

  const loadRestaurants = async () => {
    let response = await fetch('http://localhost:4000/api/restaurantusers',{
      method:"GET",
      header:{
        'Content-Type':'application/json'
      }
    });
    response = await response.json()

    setrestaurants(response ) 

 console.log(restaurants )
  }

  useEffect(()=>{
    loadData()
    loadRestaurants()
  },[])

  return (
    <>  
   {/* Carousel */}
    {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      
      <div className="carousel-indicators"><form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> 
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302143_960_720.jpg" className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302143_960_720.jpg" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302143_960_720.jpg" className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div> */}
    
        <div className='container'>
        
              <div className='row mb-3 '>
                <div  className="fs-3 m-3">
                  Restaurants
                  </div>
                <hr/> 
                {
                   restaurants.length !== 0 ? restaurants.map((restaurant)=>{
                    return(
                      <div key={restaurant._id} className='col-12 col-md-6 col-lg-3'>
                      
                        

                        <RestaurantCard restaurants = {restaurant}/>

                      </div>
                    )
                  }): <div> No Such Data Found</div>
                }
              </div>
                 
          
        </div>

        <div className='container'>
          { (foodCategory.length !== 0)?
             foodCategory.map((data)=>{
              return (
              <div className='row mb-3 '>
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                  </div>
                <hr/> 
                {
                   foodItem.length !== 0 ? foodItem.filter((item)=> item.CategoryName === data.CategoryName)
                  .map(filterItems=>{
                    return(
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                        <Card 
                        foodItem = {filterItems}
                       options={filterItems.options[0] }
                        ></Card> 
                      </div>
                    )
                  }): <div> No Such Data Found</div>
                }
              </div>
                )
            }) : <div>No Such Data Found</div> 
          }
          
        </div>
        
     
    
    </>
  )
}
