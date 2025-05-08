
const Review = ({  setReviewId, review, setReview  }) => {
  return (
    <div className=' fixed top-0 left-0 backdrop-blur-sm w-full h-screen flex justify-center items-center'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Comment
            </th><th scope="col" className="px-6 py-3">
              Images
            </th><th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
          </thead>
          <tbody>
            {review.length > 0 ? review.map((data, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4">
                  { data.comments }
                </td>
                <td className="px-6 py-4">
                  { data.images.length > 0 ? <div><a href={data.images[0]} target='_blank'><img className="w-15 h-15" src={data.images[0]} alt="img" /></a></div> : <span>no images</span>}
                </td>
                <td className="px-6 py-4">
                  <button className='bg-red-500 p-2 text-white rounded-sm shadow-2xl hover:cursor-pointer'>Delete</button>
                </td>
              </tr>
            )): (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4">
                  No reviews found !
                </td>
                <td className="px-6 py-4">

                </td>
                <td className="px-6 py-4">

                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button onClick={() => {
        setReviewId(0)
        setReview([]);
      }} className='bg-blue-400 fixed bottom-3 right-3 hover:bg-blue-900 transition duration-300 hover:text-blue-200 py-2 px-3 rounded-sm shadow-2xl hover:cursor-pointer '>Back</button>
    </div>
  );
};

export default Review;