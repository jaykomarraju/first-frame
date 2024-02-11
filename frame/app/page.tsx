import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next"

// Base URL for the IPFS gateway
const gatewayUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || "https://indigo-hollow-tyrannosaurus-728.mypinata.cloud";
const basePath = "/ipfs/Qmaa9vQwMY6RrYgYgnsj7s5dYVfZFqds87moMv83o7GxiU/";

// Array of image names
const imageNames = [
  'blue1.png', 'blue2.png', 'blue3.png',
  'green1.png', 'green2.png', 'green3.png',
  'red1.png', 'red2.png', 'red3.png',
  'gray1.png', 'gray2.png', 'gray3.png'
];

// Generating image URLs
const images = imageNames.map(name => ({
  url: `${gatewayUrl}${basePath}${name}`
}));

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  // Example to set the first image, adjust as needed
  image: images[0].url, 
  postUrl: `https://${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Politio Frame",
  description: "What's your political alignment?",
  openGraph: {
    title: "Politio Frame",
    description: "What's your political alignment?",
    images: images // Use the dynamically generated list of images
  },
  other: {
    ...frameMetadata,
  }
};

export default function Page() {
  return (
    <div>
      <h1>Politio Frame</h1>
    </div>
  );
}
