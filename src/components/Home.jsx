import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

function Home() {
  const [newBigList, setNewBigList] = useState()
  const [error, setError] = useState(false)
  const store = useSelector((item) => item.root);
  const dispatch = useDispatch()

  const handleCreate = (e) => {
    e.preventDefault()
    if (newBigList) {
      setError(false)
      dispatch({
        type : "CREATE_BIG_LIST",
        payload : newBigList
      })
      setNewBigList("")
    } else {
      setError(true)
    }
  }

  const handleDelete = (title) => {
    dispatch({
      type : "DELETE_BIG_LIST",
      payload : title
    })
  }

  return (
    <div id="Home">
      {!error && <h1>HackList - Redux</h1>}
      {error && <h1 style={{color:"red"}}>Nombre Obligatorio</h1>}
      <div className="bigListsBox">
        <form onSubmit={(e) => handleCreate(e)} className="bigList create">
          <input onChange={(e) => setNewBigList(e.target.value)} id="newBigList" type="text" placeholder="Crea una nueva lista"/>
          <button type="submit" id="newBigList">Crear</button>
        </form>
        {store.map((list) => (
          <div key={list.title} className="bigList">
            <Link to={`/list/${list.title}`}>
            <p>{list.title}</p>
            </Link>
            <DeleteIcon onClick={() => handleDelete(list.title)}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
