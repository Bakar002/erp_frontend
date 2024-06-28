import React from "react";
import "./First.css";
import Book1 from "../../../../Assets/Unibooks/1.jpeg";
import Book2 from "../../../../Assets/Unibooks/2.jpeg";
import Book3 from "../../../../Assets/Unibooks/3.jpeg";
import Book4 from "../../../../Assets/Unibooks/4.jpeg";
import Book5 from "../../../../Assets/Unibooks/5.jpeg";
import Book6 from "../../../../Assets/Unibooks/6.jpeg";
import Book7 from "../../../../Assets/Unibooks/7.jpeg";
import Book8 from "../../../../Assets/Unibooks/8.jpeg";
import Book9 from "../../../../Assets/Unibooks/9.jpeg";
import Book10 from "../../../../Assets/Unibooks/10.jpeg";
import Book11 from "../../../../Assets/Unibooks/11.jpeg";
import Book12 from "../../../../Assets/Unibooks/12.jpeg";
import Book13 from "../../../../Assets/Unibooks/13.jpeg";
import Book14 from "../../../../Assets/Unibooks/14.jpeg";
import Book15 from "../../../../Assets/Unibooks/15.jpeg";

const books = [
  {
    image: Book1,
    readLink: "https://drive.google.com/file/d/19okz6WlrnCw_VaBhq8mUaw3kib1DwtFk/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=19okz6WlrnCw_VaBhq8mUaw3kib1DwtFk&export=download",
  },
  {
    image: Book2,
    readLink: "https://drive.google.com/file/d/17GLmSMhA4835XObCCYoWvSgJbum4134J/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=17GLmSMhA4835XObCCYoWvSgJbum4134J&export=download",
  },
  {
    image: Book3,
    readLink: "https://drive.google.com/file/d/1h-LrniDxSKGBUV_GZ2ep3G9AbArDrMpL/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1h-LrniDxSKGBUV_GZ2ep3G9AbArDrMpL&export=download",
  },
  {
    image: Book4,
    readLink: "https://drive.google.com/file/d/1cJOR9WjOY4KnlmhSWDZVhhlZZR79Z8YG/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1cJOR9WjOY4KnlmhSWDZVhhlZZR79Z8YG&export=download",
  },
  {
    image: Book5,
    readLink: "https://drive.google.com/file/d/1pyHTreo1lqtubCL0iGBZDNFwoRaebxAG/view",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1pyHTreo1lqtubCL0iGBZDNFwoRaebxAG&export=download",
  },
  {
    image: Book6,
    readLink: "https://drive.google.com/file/d/1CqhTwPvfqqobXRIFe9RJCrMTw_Bt8cbF/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1CqhTwPvfqqobXRIFe9RJCrMTw_Bt8cbF&export=download",
  },
  {
    image: Book7,
    readLink: "https://drive.google.com/file/d/1JIK6NBltXl5MdTaP7vn2cAR2VXtHysIK/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1JIK6NBltXl5MdTaP7vn2cAR2VXtHysIK&export=download",
  },
  {
    image: Book8,
    readLink: "https://drive.google.com/file/d/17xSkbkb3L6mIG1j6sUMJyZ6Jg1WzPTPu/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=17xSkbkb3L6mIG1j6sUMJyZ6Jg1WzPTPu&export=download",
  },
  {
    image: Book9,
    readLink: "https://drive.google.com/file/d/1TcCF8ZWXXnQ3QOzn_PKbaVmzr9oi6bXC/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1TcCF8ZWXXnQ3QOzn_PKbaVmzr9oi6bXC&export=download",
  },
  {
    image: Book10,
    readLink: "https://drive.google.com/file/d/1ev79CHEvennSJpdmieLDRi1LR_AyfZ6q/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1ev79CHEvennSJpdmieLDRi1LR_AyfZ6q&export=download",
  },
  {
    image: Book11,
    readLink: "https://drive.google.com/file/d/1GQJq3lYsS3q_LZyXw_LwLGTk4I46jwSQ/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1GQJq3lYsS3q_LZyXw_LwLGTk4I46jwSQ&export=download",
  },
  {
    image: Book12,
    readLink: "https://drive.google.com/file/d/1Jfcpmkdl6Gdu0T3fwREWo7QorSp5JKbj/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1Jfcpmkdl6Gdu0T3fwREWo7QorSp5JKbj&export=download",
  },
  {
    image: Book13,
    readLink: "https://drive.google.com/file/d/1KWyA7Ur8s34S6XCyud0NHkkQcUKVIY4f/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1KWyA7Ur8s34S6XCyud0NHkkQcUKVIY4f&export=download",
  },
  {
    image: Book14,
    readLink: "https://drive.google.com/file/d/1VD6y0h36-S39m2pye4xotKDXMjxywmbO/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1VD6y0h36-S39m2pye4xotKDXMjxywmbO/&export=download",
  },
  {
    image: Book15,
    readLink: "https://drive.google.com/file/d/1DSGtoAmrSc7FhShikojfHJe9jUPZRp2f/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1DSGtoAmrSc7FhShikojfHJe9jUPZRp2f&export=download",
  },
];

const First = () => {
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

export default First;
