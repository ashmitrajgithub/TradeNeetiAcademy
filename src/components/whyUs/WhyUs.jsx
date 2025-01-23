import ServicesItem from "./WhyUsItems";
import Faculty from "../faculty/Faculty";

function WhyUs() {

  const services = [
    {
      index: "1",
      image: "\\assets\\landingImg.jpg",
      title: "Own a Website that Works",
      description: "It must look great and you want it to work all the time. I help you by designing, building, and hosting a beautiful site that'll grow your business.",
    },
    {
      index: "2",
      image: "\\assets\\landingImg2.jpg",
      title: "Boost Your Online Presence",
      description: "I help you create a professional and engaging website that attracts visitors and drives conversions.",
    },
    {
      index: "3",
      image: "\\assets\\landingImg3.jpg",
      title: "Mobile-Friendly Designs",
      description: "Ensure your website works seamlessly on all devices, providing a great user experience.",
    },
    {
      index: "4",
      image: "\\assets\\landingImg.jpg",
      title: "Custom Web Solutions",
      description: "Get tailored solutions to meet your unique business needs and goals.",
    },
  ];
  return (
    <>
      <section className="mx-5 md:mx-16 flex flex-col items-center">
  <h2 className="text-center text-2xl m-5 md:pb-6 md:text-4xl font-bold ">Ways I can help you</h2>
  {services.map((service, index) => (
    <ServicesItem
      key={index}
      image={service.image}
      title={service.title}
      description={service.description}
      isReverse={index % 2 !== 0} // Adjusted for 0-based index
      scroll={scroll}
    />
  ))}
</section>
<Faculty/>

</>
  )
};

export default WhyUs;