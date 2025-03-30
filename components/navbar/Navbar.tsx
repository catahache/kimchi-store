import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href={"/"} className="text-xl font-bold">
          <span className="text-primary">Kimchi Store</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/"} className="text-xl font-bold">
          <span className="text-primary">Home</span>
        </Link>
        <Link href={"/"} className="text-xl font-bold">
          <span className="text-primary">About</span>
        </Link>
        <Link href={"/"} className="text-xl font-bold">
          <span className="text-primary">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
