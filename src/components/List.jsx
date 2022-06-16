import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";

function List() {
  const { title } = useParams();
  const store = useSelector((item) => item.root);
  const thisList = store.find((item) => item.title === title);
  const [newItem, setNewItem] = useState();
  const dispatch = useDispatch();

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_ITEM",
      payload: {
        listTitle: title,
        newItem: newItem,
      },
    });
  };

  const handleDelete = (name) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        listTitle: title,
        itemToDelete: name,
      },
    });
  };

  const handleComplete = (name, completed) => {
    dispatch({
      type: "COMPLETE",
      payload: {
        listTitle: title,
        itemToDelete: name,
        status: !completed,
      },
    });
  };

  return (
    <div id="Home">
      <h1>{title}</h1>
      <div className="center">
        <Link style={{ color: "black" }} to="/">
          Volver
        </Link>
      </div>
      <div className="bigListsBox">
        <form onSubmit={(e) => handleCreate(e)} className="bigList create">
          <input
            onChange={(e) => setNewItem(e.target.value)}
            id="newBigList"
            type="text"
            placeholder="Crea un nuevo Item"
          />
          <button type="submit" id="newBigList">
            Crear
          </button>
        </form>
        {thisList &&
          thisList.list.map((item) => (
            <div
              key={item.name}
              style={item.completed ? { backgroundColor: "green" } : {}}
              className="bigList"
            >
              <CheckIcon onClick={() => handleComplete(item.name, item.completed)} />
              <p>{item.name}</p>
              <DeleteIcon onClick={() => handleDelete(item.name)} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default List;
