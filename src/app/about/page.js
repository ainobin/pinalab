import CompanyInfo from '@/components/CompanyInfo';
import TeamMembers from '@/components/TeamMembers';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'About Us | PinaLab',
  description: 'Learn more about PinaLab - our mission, story, team, and values.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#0a0b0f] via-[#121318] to-[#0a0b0f]">
      <CompanyInfo />
      <TeamMembers />
      <ContactSection />
    </main>
  );
}
