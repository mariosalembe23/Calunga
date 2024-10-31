import {
  ChevronRight,
  ChevronUp,
  Heart,
  ShoppingCart,
  SlidersVertical,
} from "lucide-react";
import React from "react";

const Item: React.FC<{ href: string; name: string }> = ({ href, name }) => {
  return (
    <a
      href={href}
      className="flex font-medium text-zinc-600 transition-all hover:text-black items-center justify-between"
    >
      <span>{name}</span>
      <ChevronRight className="text-zinc-700" />
    </a>
  );
};

const LinkItem: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-600 font-medium transition-all hover:text-black"
      >
        {text}
      </a>
    </li>
  );
};

const Header = () => {
  return (
    <header className="py-5 w-full px-8 border-b flex justify-between items-center">
      <div className="flex items-center gap-9">
        <div>
          <a href="#" className="text-xl font-semibold">
            SHEIN
          </a>
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            <LinkItem href="#" text="Shop" />
            <LinkItem href="#" text="Women" />
            <LinkItem href="#" text="Men" />
            <LinkItem href="#" text="Children" />
          </ul>
        </nav>
      </div>
      <div>
        <button className="text-zinc-700">
          <ShoppingCart size={21} />
        </button>
      </div>
    </header>
  );
};

const CardColor: React.FC<{ color: string; nameColor: string }> = ({
  color,
  nameColor,
}) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <div className={`w-9 h-9 rounded-lg ${color}`}></div>
      <small className="text-zinc-600">{nameColor}</small>
    </div>
  );
};

const CardModel: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => {
  return (
    <div className="h-96 flex flex-col justify-between items-center">
      <div className="w-full h-full rounded-xl model_card">
        <header className="p-4">
          <button className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
            <Heart size={19} />
          </button>
        </header>
      </div>
      <div className="pt-5 flex desktop:flex-row gap-2 desktop:gap-0 flex-col w-full justify-between items-start desktop:items-center">
        <div className="flex flex-col gap-1">
          <h4 className="font-medium text-[15px]">{name}</h4>
          <p className="text-[14px] text-zinc-600">Shein brand</p>
        </div>
        <div>
          <p className="px-5 py-1 rounded-lg bg-zinc-100 font-medium">
            ${value}
          </p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <main className="w-full flex items-center flex-col justify-between h-screen">
      <Header />
      <section className="w-full h-full grid grid-cols-8 overflow-y-auto">
        <header className="col-span-2 overflow-y-auto w-full flex items-center justify-center border-r h-full">
          <div className="w-[75%] m-auto border-x">
            <section className="header_container">
              <header className="p-5 flex items-center border-b justify-between">
                <h2 className="text-[18px] font-medium">Filter</h2>
                <button className="text-zinc-600 transition-all hover:text-black">
                  <SlidersVertical size={21} />
                </button>
              </header>
              <div className="links p-5 w-full">
                <ul className="flex  w-full flex-col gap-6">
                  <li className="w-full">
                    <Item href="#" name="Blouses" />
                  </li>
                  <li className="w-full">
                    <Item href="#" name="Dresses" />
                  </li>
                  <li className="w-full">
                    <Item href="#" name="Demin & Jeans" />
                  </li>
                  <li className="w-full">
                    <Item href="#" name="Knitwear" />
                  </li>
                  <li className="w-full">
                    <Item href="#" name="Ponts" />
                  </li>
                  <li className="w-full">
                    <Item href="#" name="Shorts" />
                  </li>
                  <li className="w-full">
                    <Item href="#" name="Tops & tees" />
                  </li>
                  <li className="w-full">
                    <Item href="#" name="Jackets & coats" />
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <button className="p-5 font-medium w-full mt-6 border-y flex items-center justify-between">
                Price
                <ChevronUp />
              </button>
              <div className="w-[80%] my-4 mx-auto bg-zinc-100 rounded-full h-2">
                <div className="w-[20%] bg-violet-600 h-full rounded-full"></div>
              </div>
              <div className="flex items-center gap-3 mt-5 justify-center">
                <button className="px-5 py-1.5 border rounded-lg transition-all hover:border-zinc-400">
                  $100
                </button>
                <button className="px-5 py-1.5 border rounded-lg transition-all hover:border-zinc-400">
                  $800
                </button>
              </div>
            </section>

            <section className="">
              <button className="p-5 font-medium w-full mt-6 border-y flex items-center justify-between">
                Colors
                <ChevronUp />
              </button>
              <div className="grid mt-5 grid-cols-4 w-[80%] m-auto gap-x-1 gap-y-3">
                <CardColor color="bg-red-500" nameColor="Red" />
                <CardColor color="bg-blue-500" nameColor="Blue" />
                <CardColor color="bg-green-500" nameColor="Green" />
                <CardColor color="bg-yellow-500" nameColor="Yellow" />
                <CardColor color="bg-indigo-500" nameColor="Indigo" />
                <CardColor color="bg-pink-500" nameColor="Pink" />
                <CardColor color="bg-purple-500" nameColor="Purple" />
                <CardColor color="bg-gray-500" nameColor="Gray" />
                <CardColor color="bg-black" nameColor="Black" />
                <CardColor color="bg-cyan-500" nameColor="Cyan" />
                <CardColor color="bg-orange-500" nameColor="Orange" />
                <CardColor color="bg-lime-500" nameColor="Lime" />
              </div>
            </section>

            <section className="mb-10">
              <button className="p-5 font-medium w-full mt-6 border-y flex items-center justify-between">
                Size
                <ChevronUp />
              </button>

              <div className="mt-5 gap-4 grid grid-cols-3 w-[80%] m-auto items-center justify-center">
                <button className="px-3 py-1 font-medium border rounded-lg transition-all hover:border-zinc-400">
                  XXS
                </button>
                <button className="px-3 py-1 font-medium border rounded-lg transition-all hover:border-zinc-400">
                  XL
                </button>
                <button className="px-3 py-1 font-medium border rounded-lg transition-all hover:border-zinc-400">
                  XS
                </button>
                <button className="px-3 py-1 font-medium border rounded-lg transition-all hover:border-zinc-400">
                  S
                </button>
                <button className="px-3 py-1 font-medium border rounded-lg transition-all hover:border-zinc-400">
                  M
                </button>
                <button className="px-3 py-1 font-medium border rounded-lg transition-all hover:border-zinc-400">
                  L
                </button>
                <button className="px-3 py-1 font-medium border rounded-lg transition-all hover:border-zinc-400">
                  XXL
                </button>
                <button className="px-3 py-1 font-medium border rounded-lg transition-all hover:border-zinc-400">
                  3XL
                </button>
                <button className="px-3 py-1 font-medium border rounded-lg transition-all hover:border-zinc-400">
                  4XL
                </button>
              </div>
            </section>
          </div>
        </header>

        <section className="col-span-6 h-full overflow-y-auto">
          <header className="p-10">
            <h3 className="text-2xl font-medium">Women's Clothing</h3>
          </header>

          <div className="mt-4 w-[95%] m-auto grid mb-5 grid-cols-4 desktop:grid-cols-5 gap-3 items-center">
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
            <CardModel name="Formal clothin satin" value="70.00" />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
