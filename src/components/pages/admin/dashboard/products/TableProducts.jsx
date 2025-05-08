const TableProducts = ({ products, getReviewByIndex }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product ID
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Availability
            </th>
            <th scope="col" className="px-6 py-3">
              Labelled Price
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Alternative Names
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Reviews
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? products.map((product, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td className="px-6 py-4">{product.productId}</td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.brand}</td>
              <td className="px-6 py-4">{product.isAvailable ? <span>in stock</span> : <span>out of stock</span>}</td>
              <td className="px-6 py-4">{product.labelledPrice}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="px-6 py-4">{product.alterNames.join(', ')}</td>
              <td className="px-6 py-4">{product.description.join(', ')}</td>
              <td className="px-6 py-4" onClick={() => {getReviewByIndex(index, product.reviews)}}>{product.reviews ? <button className='bg-blue-300 p-3 rounded-sm hover:cursor-pointer'>view</button> : <button disabled={true} className='bg-blue-300 p-3 rounded-sm hover:cursor-pointer'>view</button>}</td>
            </tr>
          )) : (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td className="px-6 py-4">No products found !</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;
