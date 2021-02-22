import H1 from 'src/elements/H1';
import Noscript from 'src/components/Noscript';
import TemplateComponent from 'src/components/TemplateComponent';

function HomePage() {
  return (
    <>
      <H1>Next.js Template</H1>
      <Noscript />
      <TemplateComponent />
    </>
  );
}

export default HomePage;
