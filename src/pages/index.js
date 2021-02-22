import H1 from 'src/elements/H1';
import Noscript from 'src/components/Noscript';
import TextCropper from 'src/components/TextCropper';

function HomePage() {
  return (
    <>
      <H1>Next.js Template</H1>
      <Noscript />
      <TextCropper />
    </>
  );
}

export default HomePage;
