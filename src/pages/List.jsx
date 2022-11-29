import React, { useState, useEffect } from 'react'

const List = () => {
    const [Users, fetchUsers] = useState([])

    const getData = () => {
        fetch('/api/getList')
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                fetchUsers(res)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="text-center top-10 w-100">
                <h1>List of Items</h1>
                {/* Check to see if any items are found*/}
                {Users.length ? (
                    <div>
                        {/* Render the Users of items */}
                        {Users.map((item) => {
                            return (
                                <div>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <h2>No List Items Found</h2>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default List;