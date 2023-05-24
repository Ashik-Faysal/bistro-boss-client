import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20 bg-fixed bg-stone-500 opacity-60">
      <SectionTitle subHeading="check it out" heading="FeaturedItem" />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2015</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            fugit illum perferendis illo provident aliquid culpa aliquam
            obcaecati quos recusandae. Quaerat sint quisquam vitae praesentium
            doloribus ut vero totam necessitatibus accusantium aperiam deserunt
            id quis rerum non aliquid, laboriosam quos?
                  </p>
                  <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
