import Link from "next/link";

export default function Footer() {
  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between">
      <div className="text-lg font-bold text-[#D4AF37]">BUILDER-APP</div>
      <div className="text-sm mt-4 md:mt-0 text-[#2E2E2E] text-center md:text-right">
        &copy; {new Date().getFullYear()} Builder App. All Rights Reserved.
      </div>
    </div>
  );
}
