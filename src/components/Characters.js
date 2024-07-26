import React from 'react';




const Characters = ({ characters }) => {
    

  return (
    <div className='row'>
        {
            characters.map( ( item, index ) => (
                <div key={index} className='col mb-4'>
                    <div className='card' style={{minWidth: "200px"}}>
                        <img src={item.image}></img>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <hr/>
                            <p className='m-0'><span style={{fontWeight: "bold"}}>Specie: </span>{item.species}</p>
                            <p className='m-0'><span style={{fontWeight: "bold"}}>Location: </span>{item.location.name}</p>
                            <p><span style={{fontWeight: "bold"}}>Status: </span>{item.status}</p>
                        </div>
                    </div>
                </div>
            ))
        }

    </div>
  );
}

export default Characters