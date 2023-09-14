import React, { useState } from "react";
import Item from "./item.js";
import { v4 as uuidv4 } from "uuid";

export default function Shop() {
    const [theme, setTheme] = useState({
        uititle: true,
        disabled: false
    });
    const classNames = theme.uititle ? "uititle" : "disabled";

    const [items, setItem] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    function handleFormSubmit(event) {
        event.preventDefault();
        const id = uuidv4();
        const newItem = {
            id: id,
            name: name,
            desc: desc
        };
        if (items.length === 0) {
            setTheme({ ...theme, uititle: false });
        }
        setItem([...items, newItem]);
        setName("");
        setDesc("");
    }

    function removeItem() {
        setItem(items.slice(1));
        if (items.length === 1) {
            setTheme({ ...theme, uititle: true });
        }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Название товара: </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Название товара"
                        className="ui-textfield"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="desc">Описание товара: </label>
                    <input
                        type="text"
                        id="desc"
                        placeholder="Описание товара"
                        className="ui-textfield"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        required
                    />
                </div>
                <div className="form-footer">
                    <div className="validation"></div>
                    <input type="submit" className="ui-button" value="Добавить" />
                </div>
            </form>

            <div>
                <p className={classNames}>Добавьте первый товар</p>
            </div>

            <ul className="ui-list">
                {items.map((item, index) => (
                    <li className="ui-item-list" key={item.id}>
                        <Item info={item} />
                        <button className="item-button" onClick={removeItem}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}