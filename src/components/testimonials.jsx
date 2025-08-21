import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import dogWalkImage from "/src/assets/dog-walk.jpg";

const ProductService = [
  {
    image: dogWalkImage,
    name: "Pet image",
    text: "Some text 1",
  },
  {
    image: "/assets/dog-walk.jpg",
    name: "Pet image",
    text: "Some text 2",
  },
  {
    image: "assets/dog-walk.jpg",
    name: "Pet image",
    text: "Some text 3",
  },
  {
    image: "assets/dog-walk.jpg",
    name: "Pet image",
    text: "Some text 4",
  },
];

export default function Testimonials() {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "800px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];


  useEffect(() => {
    setProducts(ProductService.slice(0, 9));
  }, []);

  const productTemplate = (product) => {
    return (
      <section className="grid grid-cols-2 items-center gap-2 rounded-4xl bg-white h-[250px]">
        <div className="h-48 w-96 object-cover ">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-l-4xl"
          />
        </div>
        <div>
          <p>
            {product.text} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Perspiciatis perferendis voluptatem explicabo.
          </p>
        </div>
      </section>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={1}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        // autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
