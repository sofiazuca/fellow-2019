import React from "react";
import { render } from "react-dom";

import Accordion from "./Accordion";
import Wrapper from "./Wrap";

function VolunteerQa() {
  return (
    <Wrapper>
      <section className="qa">
        <h1>Do you have any question?</h1>
        <h3 className="quetions__subtitle">
          If your question is not answered below, you can contact us at
          volunteer@teensmart.org
        </h3>

        <div className="qa__grid">
          <div className="volunteerQa__question">
            <Accordion>
              <div
                label="Can I volunteer if I am not from Costa Rica or Nicaragua?"
                className="question_title"
              >
                <div className="question_text">
                  <p>
                    El consejero (a) virtual da respuesta a las consultas de los
                    jóvenes que ingresan a través del servicio Buscas Consejo en
                    nuestra plataforma educativa www.jovensalud.net. Los
                    consejeros han de responder en un lapso de 48 horas las
                    consultas que le hayan sido asignadas.
                  </p>
                </div>
              </div>
              <div
                label="Does Teensmart only offers TCU volunteers?"
                className="question_title"
              >
                <div className="question_text">
                  <p>
                    El consejero (a) virtual da respuesta a las consultas de los
                    jóvenes que ingresan a través del servicio Buscas Consejo en
                    nuestra plataforma educativa www.jovensalud.net. Los
                    consejeros han de responder en un lapso de 48 horas las
                    consultas que le hayan sido asignadas.
                  </p>
                </div>
              </div>

              <div
                label="How old I need to be to be a volunteer?"
                className="question_title"
              >
                <div className="question_text">
                  <p>
                    El consejero (a) virtual da respuesta a las consultas de los
                    jóvenes que ingresan a través del servicio Buscas Consejo en
                    nuestra plataforma educativa www.jovensalud.net. Los
                    consejeros han de responder en un lapso de 48 horas las
                    consultas que le hayan sido asignadas.
                  </p>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="volunteerQa__question">
            <Accordion>
              <div
                label="Can I volunteer if I am not from Costa Rica or Nicaragua?"
                className="question_title"
              >
                <div className="question_text">
                  <p>
                    El consejero (a) virtual da respuesta a las consultas de los
                    jóvenes que ingresan a través del servicio Buscas Consejo en
                    nuestra plataforma educativa www.jovensalud.net. Los
                    consejeros han de responder en un lapso de 48 horas las
                    consultas que le hayan sido asignadas.
                  </p>
                </div>
              </div>
              <div
                label="Does Teensmart only offers TCU volunteers?"
                className="question_title"
              >
                <div className="question_text">
                  <p>
                    El consejero (a) virtual da respuesta a las consultas de los
                    jóvenes que ingresan a través del servicio Buscas Consejo en
                    nuestra plataforma educativa www.jovensalud.net. Los
                    consejeros han de responder en un lapso de 48 horas las
                    consultas que le hayan sido asignadas.
                  </p>
                </div>
              </div>

              <div
                label="How old I need to be to be a volunteer?"
                className="question_title"
              >
                <div className="question_text">
                  <p>
                    El consejero (a) virtual da respuesta a las consultas de los
                    jóvenes que ingresan a través del servicio Buscas Consejo en
                    nuestra plataforma educativa www.jovensalud.net. Los
                    consejeros han de responder en un lapso de 48 horas las
                    consultas que le hayan sido asignadas.
                  </p>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);

export default VolunteerQa;
