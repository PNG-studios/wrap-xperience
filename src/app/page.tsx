import Navbar from "@/components/navbar"
export default function Home() {
  return (
    <main>
      
      <section className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.png')" }}>
        <Navbar />
        <h1 className="text-primary">KEUKEN WRAPPEN</h1>
        <p>WRAP JOUW KEUKEN IN EEN DAG!</p>
      </section>
    </main>
  )
}
