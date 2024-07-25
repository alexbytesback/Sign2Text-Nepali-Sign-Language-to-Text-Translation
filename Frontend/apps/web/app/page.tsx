// File: app/page.tsx
import { Sign2Text } from './components/Sign2TextHeader';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/Howitworks';
import TechUsed from './components/TechUsed';
import { callToAction2Home, contactHome, featuresHome, socialProofHome, stepsHome, teamHome } from '../pages/home.data';
import Steps from './components/Steps';
import Contact from './components/Contact';
import Team from './components/Team';
import BlurFade from '@/components/magicui/blur-fade';

export default function Home() {
  const image = {
    src: 'https://i.ibb.co/tzQCJSh/hero.png',
    alt: 'Image description',
  };
  

  return (
    <main className='min-h-screen w-full'>
      
      <Sign2Text />
      <section className='relative m-auto max-w-5xl'>
        <BlurFade delay={0.25} inView>
        <img

          className="mx-auto h-auto w-full rounded-md"
                src={image.src}
                alt={image.alt}
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                
        />
        </BlurFade>
      </section>
      <BlurFade delay={0.25} inView>
        <TechUsed {...socialProofHome} />
        </BlurFade>
        <BlurFade delay={0.25} inView>
        <FeaturesSection {...featuresHome} />
        </BlurFade>
        <BlurFade delay={0.25} inView>

        <Steps {...stepsHome} />
        </BlurFade>
        <BlurFade delay={0.25} inView>
        <Team {...teamHome} />
        </BlurFade>
        <BlurFade delay={0.25} inView>
        <Contact {...contactHome} />
        </BlurFade>
      
    </main>
  );
}
