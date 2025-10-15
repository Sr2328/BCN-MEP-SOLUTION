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
import AreaOfActivity from '@/components/home/AreaActivity';
import FacilitiesAndResourcesBCN from '@/components/home/FacilitiesAndResources';
import CompletedProjects from '@/components/home/CompletedProjects';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <IntroductionSection />
      <MissionVisionValues />
      <BCNValuesModernLight/>
      <AreaOfActivity />
      <BusinessStats />
      <MEPServicesSection />
      <FacilitiesAndResourcesBCN />
      <WhyChooseUs />
      <ProjectHighlights />   
      <CompletedProjects />
      <PartnersSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
      

