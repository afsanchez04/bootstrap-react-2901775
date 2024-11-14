import Card from "./Card";


export default function Section(  ) {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="text-warning">Sección promos Naranjas 🍊</h1>
          <div className="row">
            <div className="col-4">
              <Card 
                tituloCard="Promo de naranjas" 
                descriptionCard="Jugosas naranjas a mitad de precio hasta las 12"
                urlCard="https://www.halegroves.com/images/xl/HG24-NavelOranges.webp?v=1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
