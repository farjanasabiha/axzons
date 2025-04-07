import Image from "next/image";
import image from "../../../public/illustration-single-man-american-cartoon-art-style-images-with-ai-generated_545052-3011.avif";

const Dashboard = ({ singleInfo }) => {
  const { firstName, lastName, email, phone, serviceType, message } =
    singleInfo;

  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-md shadow-md max-w-3xl w-full flex flex-col md:flex-row items-center gap-10">
        <Image
          src={image}
          width={400}
          height={400}
          alt="User Illustration"
          className="w-80 h-80 object-cover rounded-lg"
        />
        <div className="space-y-4 text-gray-700">
          <h3>
            <strong>Name:</strong> {firstName} {lastName}
          </h3>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Service Type:</strong> {serviceType}
          </p>
          <p>
            <strong>Message:</strong> {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
