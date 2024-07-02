import FollowMouse from './FollowMouse/FollowMouse'

const Main = () => {
  return (
    <main>
      <section className="portada">
        <h1>FULL-STACK DEVELOPER & TÉCNICO SUPERIOR EN ELECTRÓNICA</h1>
        <p>Más de 12 años de experiencia en el sector de la electrónica de consumo.</p>
        <p>Decidí retomar la parte de programación que estudié en mis estudios de electrónica (C++) y dar un cambio en mi carrera.</p>
        <p>Estudié Java y Python.</p>
        <p>Finalmente hice un bootcamp de programación web en TheBridge y me especialicé en el stock MERN/PERN.</p>
      </section>
      <section>
            <FollowMouse />
      </section>
    </main>
  );
};

export default Main;