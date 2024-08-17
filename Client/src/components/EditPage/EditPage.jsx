import {  useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/userForms";
import { useGetOneItem } from "../../hooks/useItems";
import itemApi from "../../api/catalog-api";



export default function EditPage() {
  const navigate = useNavigate();
  const {itemId}=useParams()
  const [items, setItem] =useGetOneItem(itemId)
  
  const { values, changeHandler, submitHandler } = useForm(items,async(values) =>{
  const isConfirmed= confirm('Are you sure you want to Edit this game ?')
  if (isConfirmed) {
    
  await itemApi.update(itemId,values)

  navigate(`/catalog/${itemId}/item`)
  }  
    
  },true);
  
  return (
    <section className="min-h-screen flex box-border justify-center items-center bg-background-color">
      <div className="bg-[#ddcaba] rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-green-tx">
            Create your Listing
          </h2>
          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <input
              className="p-2 mt-8 rounded-xl bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
              type="text"
              name="title"
              value={values.title}
              onChange={changeHandler}
              placeholder="Title"
              required 
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl w-full bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
                type="text"
                name="brand"
                value={values.brand}
                onChange={changeHandler}
                placeholder="Brand"
                required
              />
            </div>

            <div className="relative">
              <input
                className="p-2 rounded-xl w-full bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
                type="number"
                name="numberItems"
                value={values.numberItems}
                onChange={changeHandler}
                placeholder="Number of Items"
                required
              />
            </div>
            <div className="relative">
              <input
                className="p-2 rounded-xl w-full bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
                type="text"
                name="imageUrl"
                value={values.imageUrl}
                onChange={changeHandler}
                placeholder="Image Url"
                required
              />
            </div>
            <div className="relative">
              <input
                className="p-2 rounded-xl w-full bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
                type="number"
                name="price"
                value={values.price}
                onChange={changeHandler}
                placeholder="Price"
                required
              />
            </div>
            <div className="relative">
              <input
                className="p-2 rounded-xl w-full bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
                type="text"
                name="description"
                value={values.description}
                onChange={changeHandler}
                placeholder="Description"
                required
              />
            </div>

            <button
              className="bg-background-color text-green-tx py-2 rounded-xl hover:scale-105 duration-300 hover:bg-green-tx hover:text-navi font-medium"
              type="submit"
            >
              Edit
            </button>
          </form>
        </div>
        {/* Image */}
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1000px]"
            src="/images/log/0c1bf3ef50074a9cf6d647a40e7781c7.jpg"
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
}
