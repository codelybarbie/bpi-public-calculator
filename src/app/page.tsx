"use client";

import { useState } from "react";
import Calculator from "@/components/Calculator";
import Hero from "@/components/Hero";
import BGTable from "@/components/BGTable";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8]">
      <Hero />
      <Calculator />
      <BGTable />
      <Footer />
    </main>
  );
}
