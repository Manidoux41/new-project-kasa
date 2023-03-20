import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

function Home({apparts}) {
  const bannerTitle = 'Chez vous, partout et ailleurs'
  const imageIndex = 1;
  console.log(apparts)

  return (
    <div className="home">
      <Banner imageSrc={`./banner${imageIndex}.jpg`} bannerTitle={bannerTitle}/>
      <div className="cards">
       {
        apparts.map((appart) => (
          <Card key={appart.id} appartId={appart.id} appartTitle={appart.title} appartCover={appart.cover} />
        ))
       }
      </div>
    </div>
  );
}

export default Home;