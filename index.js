import React, { useState } from "react";
import Item from "./Item.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const id = items.length;
  const [valid, setValid] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!name) {
      setValid("Введите название товара!");
      return null;
    } else if (!desc) {
      setValid("Введитe описание товара!");
      return null;
    }
    setItems([...items, { name, desc, id: id }]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleDeleteClick(del) {
    setItems(items.filter((item) => item.id !== del.id));
    console.log(del.id);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Название: </label>
          <input
            key="name"
            type="text"
            placeholder="Название товара"
            className="textfield"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">Описание: </label>
          <input
            key="desc"
            type="text"
            placeholder="Описание товара"
            className="textfield"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation"></div>
          <input type="submit" className="btn-basic" value="Добавить" />
        </div>
      </form>
      {items.length === 0 && (
        <div>
          <p>Добавьте первый товар</p>
        </div>
      )}
      {valid && <div className="validation">{valid}</div>}
      <ul className="shop">
        {items.map((item) => (
          <li key={item.id}>
            <Item info={item} />
            <button
              key={item.id}
              className="btn-delete"
              onClick={() => handleDeleteClick(item)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
