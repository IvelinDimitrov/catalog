import { Link } from "react-router-dom";

export default function ProductTemplate({ _id, ItemName, price, imageUrl }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img
        src={imageUrl}
        alt="Product 1"
        className="w-full object-cover mb-4 rounded-lg"
      />
      <a href="#" className="text-lg font-semibold mb-2">
        {ItemName}
      </a>
      <p className=" my-2">Women</p>
      <div className="flex items-center mb-4">
        <span className="text-lg font-bold text-primary">{price}</span>
      </div>
      <Link to={`/catalog/item`}>
        <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
          Details
        </button>
      </Link>
    </div>
  );
}
