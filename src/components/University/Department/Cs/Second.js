import React from "react";
import "./Second.css";
import Book1 from "../../../../Assets/Unibooks/books for cs/1.jpg";
import Book2 from "../../../../Assets/Unibooks/books for cs/2.jpg";
import Book3 from "../../../../Assets/Unibooks/books for cs/3.jpg";
import Book4 from "../../../../Assets/Unibooks/books for cs/4.jpg";
import Book5 from "../../../../Assets/Unibooks/books for cs/5.jpg";
import Book6 from "../../../../Assets/Unibooks/books for cs/6.jpg";
import Book7 from "../../../../Assets/Unibooks/books for cs/7.jpg";


const books = [
  {
    image: Book1,
    readLink: "https://drive.google.com/file/d/123VSSp2rb1_XyJ9ELIvswTxs0xuaGgxp/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=123VSSp2rb1_XyJ9ELIvswTxs0xuaGgxp&export=download",
  },
  {
    image: Book2,
    readLink: "https://drive.google.com/file/d/1q2fFDaDIIxU5ygnvp1W36o0JX5yrBSnh/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1q2fFDaDIIxU5ygnvp1W36o0JX5yrBSnh&export=download",
  },
  {
    image: Book3,
    readLink: "https://drive.google.com/file/d/1MWsBNV9RfOLxSM3Ygk9W9Lp0HATaYBRU/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1MWsBNV9RfOLxSM3Ygk9W9Lp0HATaYBRU&export=download",
  },
  {
    image: Book4,
    readLink: "https://drive.google.com/file/d/1F-BWgw_v_SQahpIYl0OJeLbEzAP-RdM8/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1F-BWgw_v_SQahpIYl0OJeLbEzAP-RdM8&export=download",
  },
  {
    image: Book5,
    readLink: "https://drive.google.com/file/d/1aP5rP62MCZBTdqM2tNlIKV4kKiskfQEJ/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1aP5rP62MCZBTdqM2tNlIKV4kKiskfQEJ&export=download",
  },
  {
    image: Book6,
    readLink: "https://drive.google.com/file/d/1eOyV42m0aX2iEeiD__mmu8ciPTRC8MIh/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1eOyV42m0aX2iEeiD__mmu8ciPTRC8MIh&export=download",
  },
  {
    image: Book7,
    readLink: "https://drive.google.com/file/d/1QFEDvtm0-7_Xy6Zkw4Ej1H47jwh3hhJ8/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1QFEDvtm0-7_Xy6Zkw4Ej1H47jwh3hhJ8&export=download",
  },

];

const Second = () => {
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

export default Second;
