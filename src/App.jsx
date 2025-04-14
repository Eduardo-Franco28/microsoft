import microsoft from "./assets/img/2.png";
import c from "./assets/img/linguagemC.png";
import cu from "./assets/img/cc.png";
import quadrado from "./assets/img/quadradodelado.png";
import vb from "./assets/img/visual.png";
import ts from "./assets/img/ts.png";
import java from "./assets/img/js.png";
import loco from "./assets/img/loco.png";
import python from "./assets/img/python.png";
import asm from "./assets/img/asm.png";
import "./App.css";

function App() {
  return (
    <>
      <main className="tudo">
        <div className="imagem">
          <img src={microsoft} alt="logo" className="microsoft" />
          <h3 className="participantes">
            Participantes: <br />
            Eduardo; Lucas; Eduardo V. <br />
            Miguel; Débora; Gabriel <br />
            Frabricio; Pedro; Jonathan
          </h3>
        </div>
        <div className="botoes">
          <h3 className="h3_linguagem">Linguagens e Frameworks</h3>
          <div className="gp1">
            <a target="_blank" href="https://volpe-trabalho.vercel.app/">
              <img src={c} alt="logo" />
            </a>
            <a target="_blank" href="https://c-eight-xi.vercel.app/">
              <img src={cu} alt="logo" />
            </a>
            <a target="_blank" href="https://fsharpcampos.vercel.app/">
              <img src={quadrado} alt="logo" />
            </a>
          </div>
          <div className="gp1">
            <a target="_blank" href="https://pedrosante.vercel.app/">
              <img src={vb} alt="logo" />
            </a>
            <a
              target="_blank"
              href="https://trabalho-java-script-v6gxaatrh-thiago-rapozos-projects.vercel.app
"
            >
              <img src={java} alt="logo" />
            </a>
            <a
              target="_blank"
              href="https://eduardovinicius-4xbhfowbn-eduardo-francos-projects.vercel.app"
            >
              <img src={ts} alt="logo" />
            </a>
          </div>
          <div className="gp1">
            <a
              target="_blank"
              href="https://deboraparte-dt59am784-eduardo-francos-projects.vercel.app"
            >
              <img src={loco} alt="logo" />
            </a>
            <a target="_blank" href="https://python-seven-xi.vercel.app/">
              <img src={python} alt="logo" />
            </a>
            <a target="_blank" href="https://gustavo-web-templete.vercel.app/">
              <img src={asm} alt="logo" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
