import React, { Component } from 'react'
import './Awards.css'

export class Awards extends Component {
  render() {
    return (
      <div className='ahome' id='awards'>
        <div className='ai'>
          <h3>Honors & Awards</h3>
          <table className='at'>
            <tr>
              <td className='u'>
                <img className='ar' src={require("../components/Img/turn.png")}/>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h5>Mrs. Binda Choudhary Gold Medal - VIT University (2023)</h5>
                    </div>
                    <div class="flip-card-back">
                      <p>Best student Award for English Language and Literature.</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className='u'>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h5>Cent Percent Attendance Award - VIT University (2023)</h5>
                    </div>
                    <div class="flip-card-back">
                      <p>In recognition of my dedication, commitment, perseverance towards academics with 100% attendance.</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className='u'>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h5>Rajya Puraskar - Governor award (2019)</h5>
                    </div>
                    <div class="flip-card-back">
                      <p>Prestigious award in Bharat Scouts and Guides from Governor of Tamil Nadu for outstanding performance in various scouting activities.</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <table className='att'>
                  <tr>
                    <td className='d'>
                      <div class="flip-card">
                        <div class="flip-card-inner">
                          <div class="flip-card-front">
                            <h5>National cadet corps A Certificate (2019)</h5>
                          </div>
                          <div class="flip-card-back">
                            <p>With A grade.</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='d'>
                      <div class="flip-card">
                       <div class="flip-card-inner">
                          <div class="flip-card-front">
                            <h5>Rashtrabasha Visharadh Uttarardh (2016)</h5>
                          </div>
                          <div class="flip-card-back">
                            <p>In Hindi Language and Literature by Dakshina Bharat Hindi Prachar Sabha.</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Awards
