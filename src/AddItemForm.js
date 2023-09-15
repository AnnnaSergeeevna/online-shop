import React, { useState } from "react";
import Item from "./Item.js";
import { v4 as uuidv4 } from "uuid";

export default function AddItemForm(props) {
    return <form onSubmit={props.onFormSubmit}>
        <div>
            <label htmlFor="name">Название товара: </label>
            <input
                type="text"
                id="name"
                placeholder="Название товара"
                className="ui-textfield"
                value={props.name}
                onChange={props.onNameChange}
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
                value={props.desc}
                onChange={props.onDescChange}
                required
            />
        </div>
        <div className="form-footer">
            <div className="validation"></div>
            <input type="submit" className="ui-button" value="Добавить" />
        </div>
    </form>

}