import React, { Component } from 'react'
import './Contact.css'

export class Contact extends Component {
  render() {
    return (
      <div className='cont' id='contact'>
        <div className='conti'>
          <table>
            <tr>
              <td className='ct'>
                <table>
                  <tr>
                    <td>
                      <i class="ci fi fi-rr-house-building"/>
                    </td>
                    <td>
                      <div className='txtho'>
                        <p>4, DKM College Road, Sainathapuram,<br/> Vellore - 632001, Tamil Nadu,<br/> Republic of India<img src={require("../components/Img/ROI.png")}/></p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="ci fi fi-rr-envelope"/>
                    </td>
                    <td>
                      <div className='txtho'>
                        <a href='mailto:sushil.krishnan2021@vitstudent.ac.in'><p>sushil.krishnan2021@vitstudent.ac.in</p></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <i class="ci fi fi-brands-linkedin"/>                    </td>
                    <td>
                      <div className='txtho'>
                        <a href='https://linkedin.com/in/SushilKrishnan' target='_blank'><p>linkedin.com/in/SushilKrishnan</p></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="ci fi fi-brands-github"/>
                    </td>
                    <td>
                      <div className='txtho'>
                        <a href="https://github.com/SushilKrishnan" target='_blank'><p>github.com/SushilKrishnan</p></a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td className='ct'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248904.0905768508!2d78.95352303000708!3d12.899591871422407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbedda6917d262b5e!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1697607454565!5m2!1sen!2sin" style={{ border:"0", allowfullscreen:"", loading:"lazy"}} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Contact
