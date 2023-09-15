import React, { useState } from "react";
import Item from "./Item.js";
import { v4 as uuidv4 } from "uuid";

export default function ItemList(props) {
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
}