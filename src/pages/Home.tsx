import { Link } from 'react-router-dom';
import { Hero } from '@/sections/Hero';
import { HomeIndustries } from '@/sections/HomeIndustries';
import { HomeCapabilities } from '@/sections/HomeCapabilities';
import { HomeMachines } from '@/sections/HomeMachines';
import { HomeGallery } from '@/sections/HomeGallery';
import { HomeCertifications } from '@/sections/HomeCertifications';
import { Button } from '@/components/ui/button';

export function Home() {
  return (
    <main>
      <Hero />
      <div className="relative">
        <HomeIndustries />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Button asChild variant="outline">
            <Link to="/industries">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="relative">
        <HomeCapabilities />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Button asChild variant="outline">
            <Link to="/capabilities">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="relative">
        <HomeMachines />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Button asChild variant="outline">
            <Link to="/machines">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="relative">
        <HomeGallery />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Button asChild variant="outline">
            <Link to="/gallery">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="relative">
        <HomeCertifications />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Button asChild variant="outline">
            <Link to="/certifications">Learn More</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

