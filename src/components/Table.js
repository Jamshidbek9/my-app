import React, { useState } from "react"
import TableItem from "./TableItem"
const Table = ({posts , remove}) => {

    return (
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {posts.map((post , number) =>
                    <TableItem number = {number} post={post} key={post.id} remove ={remove} />
                )}
            </tbody>
        </table>
        </>
    )
}
export default Table