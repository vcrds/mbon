"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  warriorCourseGalleryTitle,
  warriorCourseImages,
  type GalleryImage,
} from "../../data/warrior-course";

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function WarriorCourseGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const closeModal = () => setSelectedImage(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-[var(--color-primary-100)] text-xl sm:text-2xl font-semibold mb-3">
          {warriorCourseGalleryTitle}
        </h2>
        <div className="w-12 h-0.5 bg-[var(--color-primary-400)] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {warriorCourseImages.map((image) => (
          <button
            key={image.id}
            type="button"
            className="group relative overflow-hidden rounded-xl cursor-pointer hover-lift text-left"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-[4/3] bg-[var(--color-primary-800)] relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-[var(--color-primary-50)] font-semibold text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-[var(--color-primary-200)] text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-[var(--color-primary-600)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-4 h-4 text-[var(--color-primary-50)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-[var(--color-primary-900)] rounded-xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-[var(--color-primary-600)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary-500)] transition-colors duration-200"
              aria-label="Fechar"
            >
              <svg
                className="w-4 h-4 text-[var(--color-primary-50)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="w-full h-auto max-h-[70vh] object-contain"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>

            <div className="p-6">
              <h3 className="text-[var(--color-primary-50)] text-xl font-semibold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-[var(--color-primary-300)]">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
