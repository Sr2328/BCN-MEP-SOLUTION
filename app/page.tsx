import { HeroSection } from '@/components/home/HeroSection';
import { IntroductionSection } from '@/components/home/IntroductionSection';
import { MEPServicesSection } from '@/components/home/MEPServicesSection';
import { ProjectHighlights } from '@/components/home/ProjectHighlights';
import { BusinessStats } from '@/components/home/BusinessStats';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { MissionVisionValues} from '@/components/home/MissionVisionValues';
import { BCNValuesModernLight } from '@/components/home/BcnValue';
import { WhyChooseUs } from '@/components/home/ChooseUs';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroductionSection />
<MissionVisionValues />
<BCNValuesModernLight/>
<WhyChooseUs />
      <PartnersSection />
      <BusinessStats />
      <MEPServicesSection />
      <ProjectHighlights />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
