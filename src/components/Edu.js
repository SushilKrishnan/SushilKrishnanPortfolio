import React, { Component } from 'react'
import './Edu.css'

export class Edu extends Component {
  render() {
    return (
      <div className='edu' id='edu'>
        <div className='einner'>
          <h1 className='ehead'>Education</h1>
          <table className='tab'>
            <tr>
              <td className='ehold'>
                <h3>All India Secondary School Examination<br/>(Class X)</h3>
                <h5>VVNKM Senior Secondary School, Vellore</h5>
                <table>
                  <tr>
                    <td className='el'>2019</td>
                    <td className='er'>Grade: 92.6% (Centum in ICT)</td>
                  </tr>
                </table>
              </td>
              <td className='ehold'>
                <h3>All India Senior School Certificate Examination<br/>(Class XII)</h3>
                <h5>VVNKM Senior Secondary School, Vellore</h5>
                <table>
                  <tr>
                    <td className='el'>2021</td>
                    <td className='er'>Grade: 95%</td>
                  </tr>
                </table>
              </td>
              <td className='ehold'>
                <h3>Bachelor of Technology - Computer Science and Engineering</h3>
                <h5>Vellore Institute of Technology, Vellore</h5>
                <table>
                  <tr>
                    <td className='el'>2021 - Present</td>
                    <td className='er'>Grade: 9.50/10.00</td>
                  </tr>
                </table>
              </td>              
            </tr>
            
          </table>
          <img className='eimg' src={require("./Img/mount.png")}></img>
        </div>
      </div>
    )
  }
}

export default Edu
