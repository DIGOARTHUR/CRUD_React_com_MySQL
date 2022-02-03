import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {

  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieList] = useState([]);
  const [newReview, setNewReview] = useState("");

//REQUISIÇÃO GET - OBTER DADOS
  useEffect(() => {
    Axios.get('http://localhost:3002/api/get').then((response) => {

      setMovieList(response.data)
    });
  }, []);


//REQUISIÇÃO POST - INSERIR DADOS
  const submitCadastro = () => {
    Axios.post('http://localhost:3002/api/insert', {
      movieName: movieName,
      movieReview: review
    }).then(() => {
      setMovieList([...movieReviewList, {
        movieName: movieName,
        movieReview: review
      }])
    })
  };

  //REQUISIÇÃO DELETE - DELETAR DADOS
  const deleteReview = (movie) => {
   Axios.delete(`http://localhost:3002/api/delete/${movie}`)
  };

   //REQUISIÇÃO UPDATE - DELETAR DADOS
   const updateReview = (movie) => {
    Axios.put("http://localhost:3002/api/update",{
      movieName: movie,
      movieReview: newReview
    });
  setNewReview('');
   };


  return (
    <>

      <h1> CRUD APPLICATION </h1>
      <div className='form'>
        <label>Movie Name:</label>
        <input type="text"
          name="movieName"
          onChange={(e) => { setMovieName(e.target.value) }}
        />

        <label>Review:</label>
        <input type="text"
          name="review"
          onChange={(e) => { setReview(e.target.value) }}
        />
        <button onClick={submitCadastro}>Submit</button>
        <div>
          {movieReviewList.map((value) => {
              return (
                <>
      
                  <h1>MovieName: {value.movieName}</h1>  
                  <p>Movie Review: {value.movieReview}</p> 
                  <button onClick={()=>{deleteReview(value.movieName)}}>Delete</button> 

                  <button onClick={()=>{updateReview(value.movieName)}}>Update</button> 
                  <input type="text" id="updateInput" onChange={ (e)=>{
                    setNewReview(e.target.value);
                  }}></input>
                </>
              );
            })}
        </div>
      </div>
     
    </>
  );
}

export default App;
