import React from "react";
import "./Fourth.css";
import Book1 from "../../../../Assets/Unibooks/books for islamic/1.jpg";
import Book2 from "../../../../Assets/Unibooks/books for islamic/2.jpg";
import Book3 from "../../../../Assets/Unibooks/books for islamic/3.jpg";
import Book4 from "../../../../Assets/Unibooks/books for islamic/4.jpg";
import Book5 from "../../../../Assets/Unibooks/books for islamic/5.jpg";


const books = [
  {
    image: Book1,
    readLink: "https://drive.google.com/file/d/1VpW7msjsAHa4JzylX8ZnvLc-LBuSvGHu/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1VpW7msjsAHa4JzylX8ZnvLc-LBuSvGHu&export=download",
  },
  {
    image: Book2,
    readLink: "https://drive.google.com/file/d/15Qe2yuTPVWmqrIOX0VTDv3kU08f18F7v/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=15Qe2yuTPVWmqrIOX0VTDv3kU08f18F7v&export=download",
  },
  {
    image: Book3,
    readLink: "https://drive.google.com/file/d/12fWF0Rhv1JynSPBQEP-D-fJd1n95xpp-/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=12fWF0Rhv1JynSPBQEP-D-fJd1n95xpp-&export=download",
  },
  {
    image: Book4,
    readLink: "https://drive.google.com/file/d/15Ad5Qz6YcrkAIguVMkyyk4rmuHlSUFFa/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=15Ad5Qz6YcrkAIguVMkyyk4rmuHlSUFFa&export=download",
  },
  {
    image: Book5,
    readLink: "https://drive.google.com/file/d/1pyHTreo1lqtubCL0iGBZDNFwoRaebxAG/view",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1pyHTreo1lqtubCL0iGBZDNFwoRaebxAG&export=download",
  },

];

const Fourth = () => {
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

export default Fourth;
