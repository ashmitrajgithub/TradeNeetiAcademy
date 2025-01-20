import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function FacultyItems({ imageUrl, title, description, name }) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[30rem] w-full sm:w-3/4 items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-sm"
        
      >
           <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover "
      />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          className="mb-6 font-medium leading-[1.5] text-gray-50"
        >
          {title}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {name}
        </Typography>
        <Typography variant="body2" className="text-gray-400">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}



export default FacultyItems;
