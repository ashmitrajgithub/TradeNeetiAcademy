import FacultyItems from "./FacultyItems";

function Faculty() {
  const facultyList = [
    {
      imageUrl: "\\src\\assets\\landingImg.jpg", // Replace with your local image paths
      title: "Mastering React Development",
      description: "Learn how to build dynamic user interfaces.",
      name: "John Doe",
    },
    {
      imageUrl: "\\src\\assets\\landingImg2.jpg",
      title: "Introduction to Data Science",
      description: "An overview of data science concepts and tools.",
      name: "Jane Smith",
    },
    {
      imageUrl: "\\src\\assets\\landingImg3.jpg",
      title: "UI/UX Design Principles",
      description: "Crafting user-centered designs for web and mobile apps.",
      name: "Michael Lee",
    },
  ];

  return (
    <>
      <h3 className="text-center text-4xl font-bold mb-16">Our Faculty</h3>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex items-center">
      {facultyList.map((faculty, index) => (
        <FacultyItems
          key={index}
          imageUrl={faculty.imageUrl}
          title={faculty.title}
          description={faculty.description}
          name={faculty.name}
        />
      ))}
    </section>
    </>
  );
}

export default Faculty;
