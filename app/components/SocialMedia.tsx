"use client";

import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

interface SocialMediaProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

export default function SocialMedia({
  className = "",
  size = "md",
  showLabels = false,
}: SocialMediaProps) {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/ministerioMBON",
      icon: FaInstagram,
      color: "hover:text-pink-500",
      label: "@ministerioMBON",
    },
    // {
    //   name: "Facebook",
    //   url: "https://www.facebook.com/ministerioboasnovas",
    //   icon: FaFacebook,
    //   color: "hover:text-blue-600",
    //   label: "Ministério Boas Novas",
    // },
    // {
    //   name: "YouTube",
    //   url: "https://www.youtube.com/@ministerioboasnovas",
    //   icon: FaYoutube,
    //   color: "hover:text-red-600",
    //   label: "@ministerioboasnovas",
    // },
    // {
    //   name: "WhatsApp",
    //   url: "https://wa.me/5541999999999",
    //   icon: FaWhatsapp,
    //   color: "hover:text-green-500",
    //   label: "(41) 99999-9999",
    // },
  ];

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 transition-colors duration-200 ${social.color}`}
          aria-label={`Siga-nos no ${social.name}`}
        >
          <social.icon className={sizeClasses[size]} />
          {showLabels && (
            <span className={`${textSizeClasses[size]} font-medium`}>
              {social.label}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
