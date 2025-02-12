import Navbar from "@/components/home/Navbar";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="relative bg-beige container">
      {children}
      <div className="fixed bottom-0">
        <Navbar />
      </div>
    </div>
  );
};

export default layout;
