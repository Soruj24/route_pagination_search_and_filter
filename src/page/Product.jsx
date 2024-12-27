import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination
  const itemsPerPage = 12;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCurrentChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousChange = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextChange = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const getVisiblePageNumbers = () => {
    const visiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePageNumbers = getVisiblePageNumbers();

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [currentPage]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Products</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-xl font-semibold text-gray-700">{product.title}</h2>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md my-4"
                />
                <p className="text-gray-600 text-sm capitalize">{product.category}</p>
                <p className="text-gray-800 font-semibold mt-2">Price: $ {product.price}</p>
                <div className="mt-4 text-center">
                  <Link
                    to={`/product/${product.id}`}
                    state={product}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Add Product
                  </Link>
                </div>
              </div>
            ))}
        </section>

        <div className="my-3 text-center">
          <button
            disabled={currentPage === 1}
            onClick={handleFirstPage}
            className="mx-2 px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            First Page
          </button>
          <button
            onClick={handlePreviousChange}
            disabled={currentPage === 1}
            className="mx-2 px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            Previous
          </button>
          {visiblePageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handleCurrentChange(pageNumber)}
              className={`mx-2 px-2 py-2 rounded-md transition-colors ${currentPage === pageNumber
                ? "bg-blue-700 text-white font-bold"
                : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={handleNextChange}
            disabled={currentPage === totalPages}
            className="mx-2 px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            Next
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={handleLastPage}
            className="mx-2 px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            Last Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
