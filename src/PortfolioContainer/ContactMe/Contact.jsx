import "./contact.css"
import emailjs from 'emailjs-com';
import { useRef, useState } from "react";

const Contact = () => {
    const formRef = useRef();
    const [done,setDone] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('Gmail-service', 'template_6let35b', formRef.current, 'user_4ihYzUrOrqryZo3AZC2wh')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Gostou do meu Trabalho</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="" className="c-icon" />
                            +85 99103-9732
                        </div>
                        <div className="c-info-item">
                            <img src="https://iconarchive.com/download/i85569/graphicloads/100-flat/email-2.ico" alt="" className="c-icon" />
                            jrjeova@hotmail.com
                        </div>
                        <div className="c-info-item">
                            <img src="https://i0.wp.com/mogi-group.com/content/uploads/2018/08/localisation.png" alt="" className="c-icon" />
                            Fortaleza/CE 
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Vamos trabalhar Juntos,  fale comigo por aqui ou diretamente pelo Whatsapp</b>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input type="text" placeholder="Nome"  name="user_name" />
                        <input type="text" placeholder="Assunto"  name="user-subject" />

                        <input type="text" placeholder="Email"  name="user_email" />

                        <textarea rows="5" placeholder="Menssagem"   name="message" />

                        <button>Enviar</button>
                        {done && "Email Enviado!"}
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact
