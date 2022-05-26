import React,{useEffect,useState} from 'react'
import './Home.css';
const Home = () => {
    const [data,setData] = useState([]); 
    // let action_movies;
    useEffect(()=>{
        fetch('https://wookie.codesubmit.io/movies',
        {
            method:'get',
            headers: {
                'Authorization': 'Bearer Wookie2019'
            }
        })
        .then(resp => resp.json())
        .then(result => setData(result.movies)) 
        .catch(err => alert(err))
    },[])
    let mov = JSON.parse(JSON.stringify(data));
    let action = [];
    let animation = [];
    let sci_fi = [];
    let thriller = [];
    let crime = [];
    let adventure = [];
    let biography = [];
    let miscellaneous = [];
    mov.forEach((item, index)=>{      
        if(item.genres.includes('Action')) 
        action.push(item)   
    })
    mov.forEach((item, index)=>{      
        if(item.genres.includes('Animation')) 
        animation.push(item)   
    })
    mov.forEach((item, index)=>{      
        if(item.genres.includes('Sci-Fi')) 
        sci_fi.push(item)   
    })
    mov.forEach((item, index)=>{      
        if(item.genres.includes('Thriller')) 
        thriller.push(item)   
    })
    mov.forEach((item, index)=>{      
        if(item.genres.includes('Crime')) 
        crime.push(item)   
    })
    mov.forEach((item, index)=>{      
        if(item.genres.includes('Adventure')) 
        adventure.push(item)   
    })
    mov.forEach((item, index)=>{      
        if(item.genres.includes('Biography')) 
        biography.push(item)   
    })
    mov.forEach((item, index)=>{      
        if(!item.genres.includes('Action') && !item.genres.includes('Animation') && !item.genres.includes('Sci-Fi') && !item.genres.includes('Thriller') &&
        !item.genres.includes('Crime') && !item.genres.includes('Adventure') && !item.genres.includes('Biography')) 
        miscellaneous.push(item)   
    })  
    
  return (
      <>     
      <br/><hr/><br/>
    <div><b>ACTION</b></div>
    <div className='list'>           
        {action.map((item) =>{                                       
            return (    
                <div className='card' key={item.id}>                
                    <img src={item.poster} className='card-img' alt='movie img' />
                        <div className='card-details'>
                            <b>Movie</b>:{item.title}<br/>
                            <b>IMDB</b>:{item.imdb_rating}<br/>
                            <b>Length</b>:{item.length}<br/>
                            <b>Age Allowed</b>:{item.classification}
                        </div>
                </div>              
            );             
        })}        
    </div>
    <br/>    
    <div><b>ADVENTURE</b></div>
    <div className='list'>           
        {adventure.map((item) =>{                                       
            return (    
                <div className='card' key={item.id}>                
                    <img src={item.poster} className='card-img' alt='movie img' />
                        <div className='card-details'>
                            <b>Movie</b>:{item.title}<br/>
                            <b>IMDB</b>:{item.imdb_rating}<br/>
                            <b>Length</b>:{item.length}<br/>
                            <b>Age Allowed</b>:{item.classification}
                        </div>
                </div>              
            );             
        })}        
    </div>
    <br/>
    <div><b>ANIMATION</b></div>
    <div className='list'>           
        {animation.map((item) =>{                                       
            return (    
                <div className='card' key={item.id}>                
                    <img src={item.poster} className='card-img' alt='movie img' />
                        <div className='card-details'>
                            <b>Movie</b>Movie:{item.title}<br/>
                            <b>IMDB</b>:{item.imdb_rating}<br/>
                            <b>Length</b>:{item.length}<br/>
                            <b>Age Allowed</b>:{item.classification}
                        </div>
                </div>              
            );             
        })}        
    </div>
    <br/>
    <div><b>BIOGRAGHY</b></div>
    <div className='list'>           
        {biography.map((item) =>{                                       
            return (    
                <div className='card' key={item.id}>                
                    <img src={item.poster} className='card-img' alt='movie img' />
                        <div className='card-details'>
                            <b>Movie</b>:{item.title}<br/>
                            <b>IMDB</b>:{item.imdb_rating}<br/>
                            <b>Length</b>:{item.length}<br/>
                            <b>Age Allowed</b>:{item.classification}
                        </div>
                </div>              
            );             
        })}        
    </div>
    <br/>
    <div><b>CRIME</b></div>
    <div className='list'>           
        {crime.map((item) =>{                                       
            return (    
                <div className='card' key={item.id}>                
                    <img src={item.poster} className='card-img' alt='movie img' />
                        <div className='card-details'>
                            <b>Movie</b>:{item.title}<br/>
                            <b>IMDB</b>:{item.imdb_rating}<br/>
                            <b>Length</b>:{item.length}<br/>
                            <b>Age Allowed</b>:{item.classification}
                        </div>
                </div>              
            );             
        })}        
    </div>
    <br/>
    <div><b>SCIENCE-FICTION</b></div>
    <div className='list'>           
        {sci_fi.map((item) =>{                                       
            return (    
                <div className='card' key={item.id}>                
                    <img src={item.poster} className='card-img' alt='movie img' />
                        <div className='card-details'>
                            <b>Movie</b>:{item.title}<br/>
                            <b>IMDB</b>:{item.imdb_rating}<br/>
                            <b>Length</b>:{item.length}<br/>
                            <b>Age Allowed</b>:{item.classification}
                        </div>
                </div>              
            );             
        })}        
    </div>
    <br/>
    <div><b>THRILLER</b></div>
    <div className='list'>           
        {thriller.map((item) =>{                                       
            return (    
                <div className='card' key={item.id}>                
                    <img src={item.poster} className='card-img' alt='movie img' />
                        <div className='card-details'>
                            <b>Movie</b>:{item.title}<br/>
                            <b>IMDB</b>:{item.imdb_rating}<br/>
                            <b>Length</b>:{item.length}<br/>
                            <b>Age Allowed</b>:{item.classification}
                        </div>
                </div>              
            );             
        })}        
    </div>
    <br/>
    <div><b>MISCELLANEOUS</b></div>
    <div className='list'>           
        {miscellaneous.map((item) =>{                                       
            return (    
                <div className='card' key={item.id}>                
                    <img src={item.poster} className='card-img' alt='movie img' />
                        <div className='card-details'>
                            <b>Movie</b>:{item.title}<br/>
                            <b>IMDB</b>:{item.imdb_rating}<br/>
                            <b>Length</b>:{item.length}<br/>
                            <b>Age Allowed</b>:{item.classification}
                        </div>
                </div>              
            );             
        })}        
    </div>   
    </>
  )
}

export default Home