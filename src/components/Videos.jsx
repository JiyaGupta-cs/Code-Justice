import React from 'react'
import './Videos.css'
import Sidebar from './Sidebar'

const Videos = () => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">

          <Sidebar />


          <div style={{ marginLeft: '10%', marginTop: '3%' }} classNameName="my-table">
            <div className="t-container">
              <div className="row row--top-40">
                <div className="col-md-6">
                  <h2 className="row__title" style={{ fontWeight: 'bolder' }}> Videos </h2>
                </div>
              </div>
              <div className="row row--top-20">
                <div className="col-md-12">
                  <div className="table-container">
                    <table className="table">
                      <thead className="table__thead">
                        <tr>
                          <th className="table__th">Video</th>
                          <th className="table__th">Title</th>
                          <th className="table__th">Coins</th>
                          {/* <th className="table__th">Status</th> */}
                          <th className="table__th">Likes</th>
                          <th className="table__th">Status</th>
                          {/* <th className="table__th">Progress</th> */}
                        </tr>
                      </thead>
                      <tbody className="table__tbody">

                        <tr className="table-row table-row--red table-row--natalie">
                          <td className="table-row__td">
                            <div className="table-row__img"></div>

                          </td>
                          <td className="table-row__td  t-align">
                            <div className="table-row__info">
                              <p className="table-row__name">Natallie Quest Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quia.</p>
                              {/* <span className="table-row__small">Social content manager</span> */}
                            </div>
                          </td>
                          <td className="table-row__td">
                            <div className="">
                              <p className="table-row__policy">$200</p>
                              {/* <span className="table-row__small">All Inclusive Policy</span> */}
                            </div>
                          </td>
                        
                          <td className="table-row__td">
                            30K
                          </td>
                          
                          <td className="table-row__td">
                            <p className="table-row__progress status--green status">Approved</p>
                          </td>
                          
                        </tr>


                        <tr className="table-row table-row--thomas">

                          <td className="table-row__td">
                            <div className="table-row__img"></div>

                          </td>
                          <td className="table-row__td  t-align">
                            <div className="table-row__info">
                              <p className="table-row__name">Thomas Perez</p>
                              {/* <span className="table-row__small">CEO</span> */}
                            </div>
                          </td>
                          <td className="table-row__td">
                            <div className="">
                              <p className="table-row__policy">$0</p>
                              {/* <span className="table-row__small">All Inclusive Policy</span> */}
                            </div>
                          </td>
                          
                          <td className="table-row__td">
                            25.5K
                          </td>
                         
                          <td className="table-row__td">
                            <p className="table-row__progress status status--red">Rejected</p>
                          </td>
                          
                        </tr>

                        <tr className="table-row table-row--red table-row--na">
                          <td className="table-row__td">
                            <div className="table-row__img"></div>

                          </td>
                          <td className="table-row__td  t-align">
                            <div className="table-row__info">
                              <p className="table-row__name">Natallie Quest Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quia.</p>
                              {/* <span className="table-row__small">Social content manager</span> */}
                            </div>
                          </td>
                          <td className="table-row__td">
                            <div className="">
                              <p className="table-row__policy">$30</p>
                              {/* <span className="table-row__small">All Inclusive Policy</span> */}
                            </div>
                          </td>
                        
                          <td className="table-row__td">
                            28K
                          </td>
                          
                          <td className="table-row__td">
                            <p className="table-row__progress status--green status">Approved</p>
                          </td>
                          
                        </tr>


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


            </div>

          </div>

        </div>
      </div>


    </>
  )
}

export default Videos
