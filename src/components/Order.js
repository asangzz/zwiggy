import React from 'react';

const  Order = ({ orderData }) => {
  // Extract relevant data from orderData
  const { _id, email, order_data } = orderData;

  return (
    <div className="row">
     {order_data.map((itemGroup, index) => (
      <div className='col-md-3'>   
      <div className="card mb-3 card-product">
      {itemGroup.map((item) => (
              <div key={item.id}>  
      <img src={item.img} className="card-img-top" alt="{item.name}" style={{height:"170px", objectFit:"cover"}} />
      <div className="card-body"> 
          <div key={index} className="list-group">
                         
                <h5 class="card-title text-center">{item.name}</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><span>Quantity:</span> <em> {item.qty}</em></li>
                  <li class="list-group-item"><span>Size:</span> <em> {item.size}</em></li>
                  <li class="list-group-item"><span>Price:</span> <em> {item.price}</em></li>
                  <li class="list-group-item"><span>Status:</span> <em>{item.orderConfirmation ? <span className='text-success'>  Accepted </span> : <span className='text-danger'>  Pending </span>}</em></li>
                </ul>
             
          </div>
          </div>
          </div>
 ))}
 </div>
          
      
      </div>  ))}
      <div>

      
    </div>
    </div>
  );
};

export default Order;
