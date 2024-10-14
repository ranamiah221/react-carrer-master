const List = ({ category }) => {
    console.log(category);
  const {logo,category_name, availability}=category;
  return (
    <div className=" bg-gray-100 shadow-xl rounded-lg pl-3 py-4">
      <figure>
        <img className="border-2"
          src={logo}
          alt="Shoes"
        />
      </figure>
       <h2 className="text-xl font-bold mt-3">{category_name}</h2>
       <p className="text-sm font-normal text-gray-400">{availability}</p>
      
    </div>
  );
};

export default List;
