import A from 'src/elements/A';
import H1 from 'src/elements/H1';
import BannerForNoJs from 'src/components/BannerForNoJs';
import Section from 'src/blocks/Section';
import TextCropper from 'src/components/TextCropper';

function HomePage() {
  return (
    <>
      <H1>
        <A href="https://nextjs.org/">Next.js</A> Template
      </H1>
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
