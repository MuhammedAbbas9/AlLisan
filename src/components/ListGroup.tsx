import { Fragment } from "react/jsx-runtime";
import { useState, type MouseEvent } from "react";

function ListGroup() {

    let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
    //items = [];

    const [SelectedIndex, SetSelectedIndex] = useState(-1);
    

    return (
        <Fragment>
            <h1 className="text-center">List Group</h1>
            {items.length === 0 && <p className="text-center">No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className={SelectedIndex === index
                        ? "list-group-item active"
                        : "list-group-item"
                    } onClick={() => SetSelectedIndex(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default ListGroup;