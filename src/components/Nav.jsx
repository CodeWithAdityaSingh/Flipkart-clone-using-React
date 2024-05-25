import React from "react";
import { CiSearch } from "react-icons/ci";

function Nav() {
  return (
    <>
      <header>
        <nav>
          <div className="nav flex h-10  gap-x-10 items-center p-10 bg-white">
            <div className="img">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg "
                alt=""
              />
            </div>
            <div className="Text flex  items-center  bg-slate-200 w-6/12 p-2 text-lg  rounded-lg ">
              <CiSearch size=".9em" />
              <div className="input  w-full ">
                <input
                  className="  rounded-lg border-none focus:outline-none w-full border-2 p-1 bg-slate-200  selection:"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Products"
                />
              </div>
            </div>
            <div className="login flex justify-center items-center ">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                alt=""
              />
              <div>
                <button className=" m-1 border-stone-950  bg-white text-black rounded-lg">
                  Login
                </button>
              </div>
            </div>
            <div className="cart flex justify-center items-center ">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                alt=""
              />

              <div>
                <button className="  m-1 border-stone-950 bg-white text-black rounded-lg">
                  Cart
                </button>
              </div>
            </div>
            <div className="seller flex justify-center items-center">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                alt=""
              />

              <div>
                <button className=" m-1 border-stone-950 bg-white text-black rounded-lg">
                  Become a Seller
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="nav2 h-32 bg-white w-11/12 my-3 mx-auto flex  justify-around ">
          <div className="one flex flex-col justify-center items-center">
            <div>
              <img
                className="w-16"
                src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                alt=""
              />
            </div>
            <div>Grocerry</div>
          </div>
          <div className="two flex flex-col justify-center items-center">
            <div>
              <img
                className="w-16"
                src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
                alt=""
              />
            </div>
            <div>Mobiles</div>
          </div>
          <div className="three flex flex-col justify-center items-center">
            <div>
              <img
                className="w-16"
                src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                alt=""
              />
            </div>
            <div>Fashion</div>
          </div>
          <div className="four flex flex-col justify-center items-center">
            <div>
              <img
                className="w-16"
                src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
                alt=""
              />
            </div>
            <div>Electronics</div>
          </div>
          <div className="five flex flex-col justify-center items-center">
            <div>
              <img
                className="w-16"
                src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                alt=""
              />
            </div>
            <div>Home&Furniture</div>
          </div>
          <div className="six flex flex-col justify-center items-center">
            <div>
              <img
                className="w-16"
                src="	https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100"
                alt=""
              />
            </div>
            <div>Appliances</div>
          </div>
          <div className="seven flex flex-col justify-center items-center">
            <div>
              <img
                className="w-16"
                src="	https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
                alt=""
              />
            </div>
            <div>Travel</div>
          </div>
          <div className="eight flex flex-col justify-center items-center">
            <div>
              <img
                className="w-16"
                src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                alt=""
              />
            </div>
            <div>Beauty,Toys&More</div>
          </div>
          <div className="nine flex flex-col justify-center items-center">
            <div>
              <img
                className="w-16"
                src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
                alt=""
              />
            </div>
            <div>Two Wheelers</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
