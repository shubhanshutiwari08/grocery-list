import React, { useState } from "react";
import "./List.css";

function List() {
  const [list, setList] = useState([]);
  const [inputData, setInputData] = useState("");

  const handleAddItem = () => {
    const newList = [...list, { title: inputData }];
    setList(newList);
    setInputData("");
    console.log(list);
  };

  const handleRemoveItem = (index) => {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
      if (index !== i) {
        newList.push(list[i]);
      }
    }
    setList(newList);
  };

  return (
    <div className="container">
      <h1 id="grocery-list" className="my-3">Grocery List</h1>
      <div>
        <input type="title" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter items to add to your list" value={inputData} onChange={(event) => setInputData(event.target.value)}/>
        {/* <input type="text" value={inputData} onChange={(event) => setInputData(event.target.value)} /> */}
        <button id="add" class="btn btn-success my-3" onClick={() => handleAddItem()}>Add Item to the List</button>
        {/* <input type="button" value="ADD" onClick={() => handleAddItem()} /> */}
      </div>
      <div class="shadow-lg p-2 mb-5 bg-body rounded my-5" id="data">
        <h2 className=" text-center my-3">Your Items</h2>
        <div className="list">
            {list.map((item, index) => {
            return (
                <>
              <div id="items" class="my-3">
                <table className="table table-striped" id="list">
                  <tbody>
                    <tr className="text-center">
                      <th scope="col">{index + 1}</th>
                      <th scope="col">{item.title}</th>
                      <th scope="col"><button class="btn btn-outline-danger" onClick={() => handleRemoveItem(index)}>Remove</button></th>
                    </tr>
                  </tbody>
                </table>                  
              </div>
            </>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default List;
