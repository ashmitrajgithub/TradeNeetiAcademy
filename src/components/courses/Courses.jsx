import CoursesItems from "./CoursesItems";


const Courses = ({ scroll }) => {
  const promise = [
    {
      image: "/src/assets/landingImg.jpg",
      name: "lorems",
      detail: "Get tailored solutions to meet your unique business needs and goals.",
    },
    {
      image: "/src/assets/landingImg.jpg",
      name: "lorem",
      detail: "Get tailored solutions to meet your unique business needs and goals.",
    },
    {
      image: "/src/assets/landingImg.jpg",
      name: "lorem",
      detail: "Get tailored solutions to meet your unique business needs and goals.",
    },
    {
      image: "/src/assets/landingImg.jpg",
      name: "lorem",
      detail: "Get tailored solutions to meet your unique business needs and goals.",
    },
    {
      image: "/src/assets/landingImg.jpg",
      name: "lorem",
      detail: "Get tailored solutions to meet your unique business needs and goals.",
    },
    
  ];

  return (
    <section className={`flex flex-col items-center justify-center w-full py-8 ${scroll}`}>
      <h2 className="text-3xl font-semibold mb-8">Current Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-screen-lg w-3/4">
        {promise.map((pro, index) => (
          <CoursesItems
            key={index}
            image={pro.image}
            name={pro.name}
            detail={pro.detail}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
