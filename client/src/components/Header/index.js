import {useState} from 'react'
import  './style.css'
import Axios from 'axios';

export function Header (){
    const [movieName, setMovieName] = useState('');
    const [review, setReview] = useState('');

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
    return (
        <>
         <h1> CRUD APPLICATION </h1>
        <div className='header'>
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

        </div>
        </>
    )
}