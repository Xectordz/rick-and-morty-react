import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';



function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  let pages = info.pages;


  const api = 'https://rickandmortyapi.com/api/character';
  const fetchCharacters = (url)=>{
    fetch(url)
      .then( res => res.json() )
      .then( data => {
        setCharacters(data.results)
        setInfo(data.info)
        console.log(data)
      })
      .catch(err => console.log(err))
      
  };

  const onPrevious=()=>{
    fetchCharacters(info.prev);
  }
  const onNext=()=>{
    fetchCharacters(info.next);
  }
  
  useEffect(() => {
    fetchCharacters(api);
  }, []);
  
  return (
    <div className="App">
      <Navbar brand="Rick and Morty App"/>
      
      <div className='container mt-5'>
        <Pagination 
          prev={info.prev} 
          next={info.next} 
          onPrevious={onPrevious}
          onNext={onNext}
          pages={info.pages}
        />
        <Characters characters={characters}/>
        <Pagination 
          prev={info.prev} 
          next={info.next} 
          onPrevious={onPrevious}
          onNext={onNext}
          pages={pages}
        />
      </div>
    </div>
  );
}

export default App;
