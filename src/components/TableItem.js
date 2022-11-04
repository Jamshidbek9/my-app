import React from "react";
const TableItem = (props) => {
    return (
                    <tr>
                        <td>{props.number+1}</td>
                        <td>{props.post.name}</td>
                        <td>{props.post.surname}</td>
                        <td><button className="btn btn-outline-danger btn-sm" onClick={() => props.remove(props.post)}>delete</button></td>
                    </tr>
    )
}
export default TableItem