import React from "react";
import "./Resume.css";



const Resume = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img className="a-img" src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                </div>

            </div>
            <div className="a-right">
                <h1 className="a-title">
                    Sobre Mim
                </h1>
                <p className="a-sub">Estágio Profissional em Desenvolvimento Front-End.</p>
                <p className="a-desc"> Tenho 19 anos e estou no segundo Semestre na Universidade em Fortaleza(Unifor), passo meu tempo programando e praticando, atualmente minhas linguagens mais usadas são Javascript, React e Java. A seguinte verá alguns projetos, Se liga em😉</p>

                <div className="a-award">
                    <img src="https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="a-award-img"></img>

                    <div className="a-award-texts">
                        <cite className="a-award-title"> "A prática nos leva a perfeição,  <br/> ou pelo menos bem próximo a ela"</cite>
                        <p className="a-award-desc">Tuca Neves</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Resume;