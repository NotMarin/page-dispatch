"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Home() {
  const router = useRouter();

  const handleToFifo = useCallback(() => {
    router.push("/fifo");
  }, [router]);

  return (
    <section className="flex h-full max-h-full items-center justify-center gap-20">
      <div className="max-w-xl 2xl:max-w-2xl">
        <h1 className="text-5xl font-bold 2xl:text-6xl">
          Simulador de algoritmos de reemplazo de página
        </h1>
        <p className="mt-6 text-lg">
          Aprende y experimenta con los algoritmos de reemplazo de página como
          FIFO, LRU, Óptimo y más. Visualiza cómo se comportan en la memoria
          paso a paso.
        </p>
        <Button
          onClick={handleToFifo}
          className="mt-6 h-12 w-full cursor-pointer justify-between text-lg"
        >
          <span className="w-full">Empezar simulación</span>
          <ArrowRight className="ml-auto size-5" />
        </Button>
      </div>
      <Image
        src="/assets/home-img.webp"
        alt="Home Image"
        width={1024}
        height={1024}
        className="hidden max-w-[42%] object-cover xl:block"
        unoptimized
      />
    </section>
  );
}
