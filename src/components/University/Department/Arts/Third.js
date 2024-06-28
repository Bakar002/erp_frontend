import React from "react";
import "./Third.css";
import Book1 from "../../../../Assets/Unibooks/arts/1.jpg";
import Book2 from "../../../../Assets/Unibooks/arts/2.jpg";
import Book3 from "../../../../Assets/Unibooks/arts/3.jpg";
import Book4 from "../../../../Assets/Unibooks/arts/4.jpg";
import Book5 from "../../../../Assets/Unibooks/arts/5.jpg";
import Book6 from "../../../../Assets/Unibooks/arts/6.jpg";
import Book7 from "../../../../Assets/Unibooks/arts/7.jpg";
import Book8 from "../../../../Assets/Unibooks/arts/8.jpg";


const books = [
  {
    image: Book1,
    readLink: "https://drive.google.com/file/d/1oR3Bh_irdC3nQFHurJq5p4jHnkDuyY_P/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1oR3Bh_irdC3nQFHurJq5p4jHnkDuyY_P&export=download",
  },
  {
    image: Book2,
    readLink: "https://drive.google.com/file/d/1q_zdf_KZFG7qQNwZWm8qyCUnCi1n1WkT/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1q_zdf_KZFG7qQNwZWm8qyCUnCi1n1WkT&export=download",
  },
  {
    image: Book3,
    readLink: "https://drive.google.com/file/d/1rPgMvk1Gnp89uk0UBgC_0REjNCRfT65H/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1rPgMvk1Gnp89uk0UBgC_0REjNCRfT65H&export=download",
  },
  {
    image: Book4,
    readLink: "https://drive.google.com/file/d/1zmo1Qw01ejbXpxH658FGHyAdO7icbZMc/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1zmo1Qw01ejbXpxH658FGHyAdO7icbZMc&export=download",
  },
  {
    image: Book5,
    readLink: "https://drive.google.com/file/d/1DCMCGAGL45Po5lowOiKHIvjWKMgR08b9/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1DCMCGAGL45Po5lowOiKHIvjWKMgR08b9&export=download",
  },
  {
    image: Book6,
    readLink: "https://drive.google.com/file/d/136fAzFvz1R28WcwnPtqJDnrkQ4hbuWpQ/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=136fAzFvz1R28WcwnPtqJDnrkQ4hbuWpQ&export=download",
  },
  {
    image: Book7,
    readLink: "https://drive.google.com/file/d/1paCIad2lYNEwIU9ZZ6VEaH_hpMDatrrP/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1paCIad2lYNEwIU9ZZ6VEaH_hpMDatrrP&export=download",
  },
  {
    image: Book8,
    readLink: "https://drive.google.com/file/d/1HV6dSGH9gIquhLyATzJ8stC_7QrxesIy/view?usp=drive_link",
    downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1HV6dSGH9gIquhLyATzJ8stC_7QrxesIy&export=download",
  },

];

const Third = () => {
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

export default Third;
