import React from 'react';

import goldIcon from '../assets/images/gold-icon.png';
import silverIcon from '../assets/images/silver-icon.png';
import bronzeIcon from '../assets/images/bronze-icon.png';

const searchTable  = (props) => (
  <section className="table-sec">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Login ID</th>
            <th>Prize</th>
          </tr>
        </thead>
        <tbody className="scroll-bar">
          <tr>
            <td>
              <span className="top-rank">
                <img src={goldIcon} alt="" />
              </span>
            </td>
            <td>username1</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>
              <span className="top-rank">
                <img src={silverIcon} alt="" />
              </span>                            
            </td>
            <td>username1</td>
            <td>900</td>
          </tr>
          <tr>
            <td>
               <span className="top-rank">
                <img src={bronzeIcon} alt="" />
               </span>
            </td>
            <td>username1</td>
            <td>800</td>
          </tr>
          <tr>
            <td>
              <span className="rank-circle">4</span>
            </td>
            <td>username1</td>
            <td>700</td>
          </tr>
          <tr>
            <td>
              <span className="rank-circle">5</span>
            </td>
            <td>username1</td>
            <td>600</td>
          </tr>
          <tr>
            <td>
              <span className="rank-circle">6</span>
            </td>
            <td>username1</td>
            <td>500</td>
          </tr>
          <tr>
            <td>
              <span className="rank-circle">7</span>
            </td>
            <td>username1</td>
            <td>400</td>
          </tr>
          <tr>
            <td>
              <span className="rank-circle">8</span>
            </td>
            <td>username1</td>
            <td>300</td>
          </tr>
          <tr>
            <td>
              <span className="rank-circle">9</span>
            </td>
            <td>username1</td>
            <td>200</td>
          </tr>
          <tr>
            <td>
              <span className="rank-circle">10</span>
            </td>
            <td>username1</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </section>
)

export default searchTable;