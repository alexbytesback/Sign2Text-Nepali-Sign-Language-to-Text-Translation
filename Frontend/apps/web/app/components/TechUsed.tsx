"use client";

import Image from 'next/image';
import { SocialProofProps } from '../common/types';
import WidgetWrapper from '../common/WidgetWrapper';
import BlurFade from "../../@/components/magicui/blur-fade";

const TechUsed = ({ images, id, hasBackground = false }: SocialProofProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <div className="flex flex-col items-center justify-center">
    <BlurFade delay={0.25} inView>
      <h1 className="text-3xl md:text-4xl text-gray-800 font-extrabold pb-10 text-center gradient-hover">
        Technology Used
      </h1>
      </BlurFade>

      <div className="flex items-center justify-center space-x-8">
        {images &&
          images.map(({ src, alt, link }, index) => (
            <div key={`item-social-proof-${index}`}>
              <a href={link} target="_blank" rel="noopener">
                <Image
                  src={src}
                  alt={alt}
                  className="h-auto w-12 opacity-50 contrast-50 grayscale duration-75 hover:opacity-100 hover:contrast-100 hover:grayscale-0 md:w-16"
                  objectFit="contain"
                  width={64}
                  height={64}
                />
              </a>
            </div>
          ))}
      </div>
    </div>
    <style jsx>{`
      .gradient-hover {
        background: linear-gradient(90deg, #ff7e5f, #feb47b, #86a8e7, #91eac9);
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: background-position 1s ease;
      }
      .gradient-hover:hover {
        background-position: 100% 0;
      }
    `}</style>
  </WidgetWrapper>
);

export default TechUsed;
