import React, { Component } from 'react'
import './ECA.css'

export class ECA extends Component {
  render() {
    return (
      <div className='eho' id='ECA'>
        <div className='ei'>
          <table className='ect'>
            <tr>
              <td className='eco'>
                <h3>School<img src={require("../components/Img/logo-VVNKM.png")}/></h3>
                <span className='ecoi'>
                  <p><img src={require("../components/Img/NCC.png")}/>National Cadet Corps (Sergeant)</p>
                  <p><img src={require("../components/Img/BSG.png")}/>Bharat Scout and Guides (Troop Leader)</p>
                  <p><img src={require("../components/Img/RI.png")}/>Rotaract Club (Office Bearer)</p>
                  <p><img src={require("../components/Img/VCC.png")}/>Computer Club (Junior President)</p>
                </span>                
              </td>
              <td className='eco'>
                <h3>College<img src={require("../components/Img/logo-VIT.png")}/></h3>
                <span className='ecoi'>
                  <p><img src={require("../components/Img/5P.png")}/>Fifth Pillar (Vice Chairperson)</p>
                  <p><img src={require("../components/Img/VTC.png")}/>VIT Trekking club (Senior Core Member)</p>
                  <p><img src={require("../components/Img/SOLAI.png")}/>SOLAI club (Senior Core Member)</p>
                  <p><img src={require("../components/Img/DebSoc.png")}/>Debate Society (Core Member)</p>
                </span>  
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default ECA
