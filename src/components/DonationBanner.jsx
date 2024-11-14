import { Text, Paper, Button, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import purpose from "../assets/purpose.png";
import { StylizedImage } from "./styliedImage";
import { FadeIn } from "./FadeIn";
const DonationBanner = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Paper
      px={"5%"}
      py={isMobile ? "10%" : "5%"}
      style={{
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "row",
        alignItems: "center",
        backgroundColor: "transparent",
        // backgroundImage: "url('https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg')",
        // backgroundSize: "cover" ,
        // background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
      }}
    >
      <div
        style={{
          flex: 2,
          paddingRight: isMobile ? 0 : "2em",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <h1 className="font-bold text-xl text-rose-500">
          HELP US BUILD A COMMUNITY CENTRE FOR OUR YOUTH
        </h1>
        <p className="text-gray-700" style={{ margin: "1em 0" }}>
          Searching for available spaces and renting them out to hold our
          programmes and events is becoming extremely difficult. It also
          increases our expenditure in addition to the costs incurred in
          providing food and accommodation to the participants.
        </p>
        <p className="text-gray-700">
          We need your support to build a dedicated community centre at Andhra
          Loyola Campus, Vijayawada, Andhra Pradesh, India.
        </p>
        <p className="text-gray-700" style={{ margin: "1em 0" }}>
          Your Donation is safe, secure and private.
        </p>
        <p className="text-gray-700">
          We will send you a tax receipt via email.
        </p>
        <button
          className="bg-rose-300 text-rose-600 font-bold text-md px-3 py-2 rounded hover:bg-rose-500 hover:text-white"
          size="md"
          style={{ margin: "2rem 0" }}
        >
          DONATE NOW
        </button>
      </div>

      <div style={{ flex: 2, marginBlock: isMobile ? "2em" : 0 }}>
        {/* <Image
          src={purpose} // replace with your actual image source
          alt="Community Center Floor Plan"
          fit="cover"
          style={{ borderRadius: '5px' }}
        /> */}
        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
          <StylizedImage
            src="https://img.freepik.com/free-photo/person-giving-chocolate-pieces-foil-wooden-backdrop_23-2147890176.jpg?t=st=1731562644~exp=1731566244~hmac=f705bc4986eccd44ca8dc410cada7e3aacd120da9dfb83f1a8f6a2f90c128c2f&w=1060"
            sizes="(min-width: 1024px) 41rem, 31rem"
            className="justify-center lg:justify-end"
          />
        </FadeIn>
      </div>
    </Paper>
  );
};

export default DonationBanner;
