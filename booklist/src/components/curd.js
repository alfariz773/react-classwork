import React, { useState } from "react";
import Navbar from "./navbar";

function Crud() {
  const [items, setItems] = useState([]);
  const [bookname, setBookname] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [publishdate, setPublishdate] = useState("");

  const [editingItemId, setEditingItemId] = useState(null);
  const [editedBookName, setEditedBookName] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!bookname.trim()) {
      alert("Book name cannot be empty");
      return;
    }

    const newItem = {
      id: items.length + 1,
      bookname,
      authorname,
      publishdate,
    };

    setItems([...items, newItem]);
    setBookname("");
    setAuthorname("");
    setPublishdate("");
  };


  const handleEditItem = (item) => {
    setEditingItemId(item.id);
    setEditedBookName(item.bookname);
  };

  const handleSaveItem = () => {
    if (!editedBookName.trim()) {
      alert("Book name cannot be empty");
      return;
    }

    const updatedItems = items.map((item) =>
      item.id === editingItemId
        ? { ...item, bookname: editedBookName }
        : item
    );

    setItems(updatedItems);
    setEditingItemId(null);
    setEditedBookName("");
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditedBookName("");
  };


  const handleDeleteItem = (itemId) => {
    const updated = items.filter((item) => item.id !== itemId);
    setItems(updated);
  };

 
  const filteredItems = items.filter(
    (item) =>
      item.bookname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.authorname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <br />

     
      <div className="container">
        <h2>Book Management</h2>
        <form onSubmit={handleSubmit}>
          <label>Book Name: </label>
          <input
            type="text"
            value={bookname}
            onChange={(e) => setBookname(e.target.value)}
          />

          <label>Author Name: </label>
          <input
            type="text"
            value={authorname}
            onChange={(e) => setAuthorname(e.target.value)}
          />

          <label>Publish Date: </label>
          <input
            type="date"
            value={publishdate}
            onChange={(e) => setPublishdate(e.target.value)}
          />

          <button className="btn btn-success" type="submit">
            Add Book
          </button>
        </form>
      </div>

      <br />

      
      <div className="container">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Publish Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center">
                  No books found
                </td>
              </tr>
            ) : (
              filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>

                  <td>
                    {editingItemId === item.id ? (
                      <input
                        type="text"
                        value={editedBookName}
                        onChange={(e) => setEditedBookName(e.target.value)}
                      />
                    ) : (
                      item.bookname
                    )}
                  </td>

                  <td>{item.authorname}</td>
                  <td>{item.publishdate}</td>

                  <td>
                    {editingItemId === item.id ? (
                      <>
                        <button className="btn btn-primary" onClick={handleSaveItem}>
                          Save
                        </button>
                        <button className="btn btn-secondary" onClick={handleCancelEdit}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleEditItem(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* SEARCH */}
      <div className="container">
        <form>
          <label>Search: </label>
          <input
            type="text"
            placeholder="Search by book or author"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Crud;
