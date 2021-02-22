import A from 'src/elements/A';
import H1 from 'src/elements/H1';
import Noscript from 'src/components/Noscript';
import TextCropper from 'src/components/TextCropper';

function HomePage() {
  return (
    <>
      <H1>
        <A href="https://nextjs.org/">Next.js</A> Template
      </H1>
      <Noscript />
      <TextCropper />
    </>
  );
}

export default HomePage;
