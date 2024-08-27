import { useEffect, useState, useRef } from "react";
import Products from "./pages/Products";

function App() {
  const data = {
    Books: [
      {
        _id: "66c3055ef1466acf04731b76",
        title: "رهاورد خدمت",
        created_at: "2024-08-13T08:58:33.656Z",
        updated_at: "2024-08-13T08:58:33.656Z",
        __v: 0,
        url: "https://ostan-mr.ir/uploads/books/tumb.jpg",
        id: "66c3055ef1466acf04731b76",
      }
    ],
  };

  const [status, setStatus] = useState(false);
  const modalRef = useRef(null);

  const openBook = (id) => {
    console.log(id);

    setStatus(true);
  };

  const closeBook = () => {
    setStatus(false);
  };

  // Handle clicks outside of the modal to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        closeBook();
      }
    };

    if (status) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    } else {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [status]);



  return (
    <div className="container">

      {/* {data.Books.map((item) => (
        <div className="content" onClick={() => openBook(item._id)}>
          <img src={item.url} className="bookCover" />
          <p key={item._id}>
            {item.title}
          </p>
        </div>
              
            ))} */}

      {/* {status && ( */}
        <div className="modal-overlay">
          <div className="modal-content" ref={modalRef}>
            <Products setStatus={setStatus} />
          </div>
        </div>
      {/* )} */}

      {/* <div className="bookshelf"></div> */}
    </div>
  );
}

export default App;
