import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://i.pinimg.com/736x/6e/f9/8e/6ef98e0b6bf51dc4c72001feb56a8470.jpg"), new URL("https://i.pinimg.com/736x/d1/f7/0b/d1f70b0bd42923d98e1ed84af43f74a0.jpg"), new URL("https://i.pinimg.com/736x/1d/86/09/1d8609b162095d7f2e0477e14c79c0d0.jpg"), new URL("https://i.pinimg.com/736x/54/19/db/5419db11847945ef5d2be083f2daa4d9.jpg")],
    qualities: [100],
  },
};

export default nextConfig;
