import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "../ui/button";

interface Slide {
  id: number;
  content: React.ReactNode;
}

interface SlidesContainerProps {
  slides: Slide[];
}

export default function SlideShow({ slides }: SlidesContainerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = useCallback(
    (direction: "up" | "down") => {
      setCurrentIndex((prev) =>
        direction === "down"
          ? Math.min(prev + 1, slides.length - 1)
          : Math.max(prev - 1, 0)
      );
    },
    [slides.length]
  );

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") changeSlide("down");
      if (event.key === "ArrowUp") changeSlide("up");
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [changeSlide]);

  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-hidden p-10">
      {currentIndex !== 0 && (
        <Button
          variant="ghost"
          onClick={() => changeSlide("up")}
          size="icon"
          className="absolute top-0 cursor-pointer rounded-full"
          disabled={currentIndex === 0}
        >
          <ChevronUp className="size-10" />
        </Button>
      )}

      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.section
            className="h-full w-full"
            key={slides[currentIndex].id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            {slides[currentIndex].content}
          </motion.section>
        </AnimatePresence>
      </div>
      <div className="absolute top-1/2 left-1 flex -translate-y-1/2 flex-col gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 cursor-pointer rounded-full transition-all focus:outline-none ${
              index === currentIndex
                ? "bg-foreground scale-125"
                : "bg-foreground/50 hover:bg-foreground/80"
            }`}
          />
        ))}
      </div>

      {currentIndex !== slides.length - 1 && (
        <Button
          onClick={() => changeSlide("down")}
          variant="ghost"
          size="icon"
          className="absolute bottom-0 cursor-pointer rounded-full"
          disabled={currentIndex === slides.length - 1}
        >
          <ChevronDown className="size-10" />
        </Button>
      )}
    </div>
  );
}
