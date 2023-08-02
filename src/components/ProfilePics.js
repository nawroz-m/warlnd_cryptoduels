"use client";

import Image from "next/image";
import { useState } from "react";

const profileImages = [
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
  {
    image: "death.webp",
    name: "Death",
  },
  {
    image: "multiplier.webp",
    name: "multiplier",
  },
];

export default function ProfilePics() {
  return (
    <>
      <div className="profile_pics_container">
        <h3 className="profile_pic_t">Choose your profile picture</h3>
        <p
          style={{
            padding: "5px 0px 12px 0px",
            margin: "0px",
            color: "gray",
          }}
        >
          It does not affect your gameplay
        </p>
        <div className="profile_images">
          {profileImages &&
            profileImages.map((data, idx) => {
              return (
                <Image
                  key={idx}
                  style={{
                    border: "1.3px solid #efb679",
                    cursor: "pointer",
                    margin: "5px",
                    opacity: idx == 0 ? 1 : 0.5,
                  }}
                  src={`/images/${data.image}`}
                  alt={data.alt}
                  width={67}
                  height={67}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
