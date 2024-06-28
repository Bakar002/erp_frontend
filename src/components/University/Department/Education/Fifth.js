import React from "react";
import "./Fifth.css";
import Book1 from "../../../../Assets/Unibooks/books for arts/1.jpg";
import Book2 from "../../../../Assets/Unibooks/books for arts/2.jpg";
import Book3 from "../../../../Assets/Unibooks/books for arts/3.jpg";
import Book4 from "../../../../Assets/Unibooks/books for arts/4.jpg";
import Book5 from "../../../../Assets/Unibooks/books for arts/5.jpg";


const books = [
  {
    image: Book1,
    readLink: "https://drive.google.com/file/d/1BYERkLiQhPRiwqbmW9FTDLAXEJEAXrkx/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1BYERkLiQhPRiwqbmW9FTDLAXEJEAXrkx&export=download",
  },
  {
    image: Book2,
    readLink: "https://drive.google.com/file/d/1wT6C39xiiHpCjAM3eZUWXEYMfPHed9C2/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1wT6C39xiiHpCjAM3eZUWXEYMfPHed9C2&export=download",
  },
  {
    image: Book4,
    readLink: "https://drive.google.com/file/d/1KmdjSWnCTApMKLjWNoieAoEg-ntre5dm/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1KmdjSWnCTApMKLjWNoieAoEg-ntre5dm&export=download",
  },
  {
    image: Book3,
    readLink: "https://drive.google.com/file/d/1rsZAhz2pVvuIrlrqwT_BtsDXPARVAoSv/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1rsZAhz2pVvuIrlrqwT_BtsDXPARVAoSv&export=download",
  },
  {
    image: Book5,
    readLink: "https://drive.google.com/file/d/1KX3Sgv9q-Ya1Fk_90b2oclDa9BTc8J7P/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1KX3Sgv9q-Ya1Fk_90b2oclDa9BTc8J7P&export=download",
  },
  
];

const Fifth = () => {
  return (
    <>
      <section>
        <div className="text-center ">
          <h2 className="pt-5 font-weight-bold">Books for Commerce Department</h2>
          <p style={{ fontSize: "large" }}>
            Download books for Commerce Department
            <br />Now You can get all textBooks of commerce department single page.
          </p>
        </div>
        <div className="container my-5">
          <div className="row">
            {books.map((book, index) => (
              <div key={index} className="col-sm-3 pt-5">
                <div className="card">
                  <a href={book.readLink}>
                    <img alt="" className="card-img-top" src={book.image} />
                  </a>
                  <div className="overlay">view</div>
                  <div className="pt-1">
                    <a href={book.readLink}>
                      <button className="btn btn-default btn-outline-primary font-weight-bold" type="button">
                        Read
                      </button>
                    </a>
                    <a href={book.downloadLink}>
                      <button className="btn btn-default btn-outline-success font-weight-bold" type="button">
                        Download
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Fifth;
