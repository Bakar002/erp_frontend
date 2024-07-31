import React from 'react'
import LahoreImg from "../../../Assets/Img/lhr.webp";
import GujranwalaImg from "../../../Assets/Img/grw.webp";
import SargodhaImg from "../../../Assets/Img/sgd.webp";
import DGKhan from "../../../Assets/Img/dg.webp";
import FaisalabadImg from "../../../Assets/Img/fsd.webp";
import MultanImg from "../../../Assets/Img/mul.webp";
import RawalpindiImg from "../../../Assets/Img/rwp.webp";
const Board = () => {
  return (
    <div>
      <h1 className="text-center punjab mt-3">Punjab Boards</h1>
        <div className="container">
          <h3 className="text-center  fw-bold">Board Papers</h3>
          <div className="row d-flex justify-content-center">
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3 flex flex-col gap-4 h-full">
              <a
                className="text-center text-decoration-none"
                href="https://example.com"
              >
                <img
                  alt=""
                  className="m-auto mt-3"
                  src={LahoreImg}
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
              <div className="card-body">
                <h6 className="text-center pt-2">
                  <a className="text-decoration-none" href="img/paper1.webp">
                    Lahore
                  </a>
                </h6>
              </div>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3 flex flex-col gap-4 h-full">
              <img
                alt="GujranwalaImg"
                className="m-auto mt-3"
                src={GujranwalaImg}
                style={{ width: "40px", height: "40px" }}
              />
              <div className="card-body">
                <h6 className="text-center pt-2">
                  <a className="text-decoration-none" href="img/paper1.webp">
                    Gujranwala
                  </a>
                </h6>
              </div>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3 flex flex-col gap-4 h-full">
              <img
                alt="SargodhaImg"
                className="m-auto mt-3"
                src={SargodhaImg}
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <div className="card-body">
                <h6 className="text-center pt-2">Sargodha</h6>
              </div>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3 flex flex-col gap-4 h-full">
              <img
                alt="DGKhanImg"
                className="m-auto mt-3"
                src={DGKhan}
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <div className="card-body">
                <h6 className="text-center pt-2">DG Khan</h6>
              </div>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3 flex flex-col gap-4 h-full">
              <img
                alt="FaisalabadImg"
                className="m-auto mt-3"
                src={FaisalabadImg}
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <div className="card-body">
                <h6 className="text-center pt-2">Faisalabad</h6>
              </div>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3 flex flex-col gap-4 h-full">
              <img
                alt="MultanImg"
                className="m-auto mt-3"
                src={MultanImg}
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <div className="card-body">
                <h6 className="text-center pt-2">Multan</h6>
              </div>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3 flex flex-col gap-4 h-full">
              <img
                alt="RawalpindiImg"
                className="m-auto mt-3"
                src={RawalpindiImg}
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <div className="card-body">
                <h6 className="text-center pt-2">Rawalpindi</h6>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Board
