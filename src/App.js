import { useEffect, useState, useRef } from "react";
import Products from "./pages/Products";
import Products2 from "./pages/Products2";
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
  const [status2, setStatus2] = useState(false);
  const modalRef = useRef(null);
  const modalRef2 = useRef(null);
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
  const [which, setWich] = useState()
  useEffect(() => {
    window.addEventListener('message', function (event) {
      console.log("Message received from the parent: " + event.data);
      setWich(event.data)
      // Message received from parent
      // if (event.data === 1) {
      //   setWich(1)
      // }



    })
  }, [])

  return (
    <div className="container">

 
      <div className="modal-overlay">

        {which === 1 ? (
          <div className="modal-content" ref={modalRef}>
            <Products />
          </div>
        ) : (
          <div className="modal-content" ref={modalRef2}>
            <Products2 />
          </div>
        )

        }
      </div>



    </div>
  );
}

export default App;
