import ServicesItem from "./WhyUsItems";
import './whyUs.css';

function WhyUs() {
  const services = [
    {
      index: "1",
      image: "\\src\\assets\\01.jpg",
      title: "1. Why Choose Us?",
      description:
        "With Trade Neeti, you're not just learning; you're transforming into a confident and skilled trader. We combine theoretical knowledge with real-world applications, ensuring our students excel in the competitive world of trading.",
    },
    {
      index: "2",
      image: "\\src\\assets\\02.jpg",
      title: "2. 📘 What We Offer:",
      description:
        "Comprehensive stock market courses (from basics to advanced levels). Guidance for NISM certification and job placement in the financial industry. Hands-on training in live market scenarios. Exclusive trading boot camps for beginners and experts. Broking services and stock market advisory.",
    },
    {
      index: "3",
      image: "\\src\\assets\\03.jpg",
      title: "3. 🚀 Our Mission:",
      description:
        "To empower individuals with the knowledge and confidence to navigate the financial markets and achieve their trading goals.",
    },
    {
      index: "4",
      image: "\\src\\assets\\04.jpg",
      title: "4. Custom Web Solutions",
      description: "Get tailored solutions to meet your unique business needs and goals.",
    },
  ];

  return (
    <section className={`mx-3 mt-6 md:mx-14 whyuscontainer`}>
      <h2 className="text-center text-1xl md:text-4xl font-bold mb-6">
        Ways I can help you
      </h2>
      {services.map((service, index) => (
        <ServicesItem
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
          isReverse={index % 2 !== 0} // Adjusted for 0-based index
        />
      ))}
    </section>
  );
}

export default WhyUs;
