"use client";

import React, { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ImageProps {
  className?: string;
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  // Add any other props that you need to support
}

const ImageComponent: FC<ImageProps> = ({
  className,
  src,
  alt,
  width,
  height,
}) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
