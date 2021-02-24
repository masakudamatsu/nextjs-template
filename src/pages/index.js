import BannerForNoJs from 'src/components/BannerForNoJs';
import Section from 'src/blocks/Section';
import TextCropper from 'src/components/TextCropper';
import TopAppBar from 'src/components/TopAppBar';

function HomePage() {
  return (
    <>
      <TopAppBar />
      <Section>
        <Section.Paragraph>
          For kick-starting your Next.js project
        </Section.Paragraph>
        <Section.Whitespace betweenSections />
      </Section>
      <noscript>
        <BannerForNoJs />
      </noscript>
      <div>
        <TextCropper />
      </div>
    </>
  );
}

export default HomePage;
