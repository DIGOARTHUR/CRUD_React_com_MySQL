import { useEffect, useState } from 'react';
import Axios from 'axios';
import './style.css'
import { RiDeleteBin6Line,RiEdit2Line} from "react-icons/ri";

export function DataList (){

   
    const [movieReviewList, setMovieList] = useState([]);
    const [newReview, setNewReview] = useState("");
  
    //REQUISIÇÃO GET - OBTER DADOS
    useEffect(() => {
      Axios.get('http://localhost:3002/api/get').then((response) => {
  
        setMovieList(response.data)
      });
    }, []);
  
  
   
  
    //REQUISIÇÃO DELETE - DELETAR DADOS
    const deleteReview = (id) => {
      Axios.delete(`http://localhost:3002/api/delete/${id}`)
    };
  
    //REQUISIÇÃO UPDATE - DELETAR DADOS
    const updateReview = (movie) => {
      Axios.put("http://localhost:3002/api/update", {
        movieName: movie,
        movieReview: newReview
      });
      setNewReview('');
    };
  
    return(
        <>
        
      <div className='form'>
      

        
        <div>

          <table>
            <tr>
              <th>MovieName</th>
              <th>Movie Review</th>
              <th>Delete/Update</th>
            </tr>
            {
              movieReviewList.map((value) => {
                return (
                  <>
                    <tr>
                      <td>{value.movieName}</td>
                      <td>{value.movieReview}</td>
                      <td> <button onClick={() => { deleteReview(value.id) }}><RiDeleteBin6Line/></button>

                        <button onClick={() => { updateReview(value.movieName) }}><RiEdit2Line/></button>
                        <input type="text" id="updateInput" onChange={(e) => {
                          setNewReview(e.target.value);
                        }}></input></td>
                    </tr>
                  </>
                )
              })
            }


          </table>


        </div>
      </div>
        </>
    )
}