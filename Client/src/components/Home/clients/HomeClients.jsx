import ClientSlider from "./slider/Slider";

export default function HomeClients (){
 return(
 <section id="clients" className="bg-testing py-16 px-4">
    <div className="container mx-auto max-w-screen-xl px-4 testimonials">
      <div className="text-center mb-12 lg:mb-20">
        <h2 className="text-5xl font-bold mb-4  text-green-tx" >
          Our Clients
        </h2>
        <p className="my-7 text-green-tx">Discover some of our biggest clients clients</p>
      </div>
      <ClientSlider/>
    </div>
  </section>
  )
}