import React, { Component } from 'react'

import Buttons from './Components/Buttons'
import Typography from './Components/Typography'
import FormElements from './Components/FormElements'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import StatusCards from './Components/Cards/StatusCards'
import Flyouts from './Components/Flyouts'
import Tabs from './Components/Tabs'
import ModalExample from './Components/Modal/Example'
import OpenModal from './Components/Modal/Open'
import SiteContent from './Components/SiteContent'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isModalOpen: false,
    }
  }

  closeModal = () => {
    document.body.style.overflow = 'visible'
    this.setState({
      isModalOpen: false,
    })
  }

  openModal = () => {
    document.body.style.overflow = 'hidden'
    this.setState({
      isModalOpen: true,
    })
  }

  render() {
    const { isModalOpen } = this.state
    return (
      <div>
        <ModalExample isOpen={isModalOpen} close={this.closeModal} open={this.openModal} />
        <Navbar />
        <section id="main-content">
          <SiteContent />
          <div className="o-site-wrap o-site-wrap--padding">
            <h1>Nebula Components</h1>
          </div>
          <Typography />
          <Buttons />
          <FormElements />
          <Cards />
          <StatusCards />
          <Flyouts />
          <OpenModal open={this.openModal} />
          <Tabs />
          <div className="o-site-wrap o-site-wrap--padding">
            <h3>Generic table</h3>
            <div className="nb-c-table-container">
              <table className="nb-c-table nb-c-table--stack@max-md">
                <thead className="nb-c-table__header">
                  <tr className="nb-c-table__row nb-c-table__header-row ">
                    <th className="nb-c-table__header-cell">Name</th>
                    <th className="nb-c-table__header-cell">Email</th>
                  </tr>
                </thead>
                <tbody className="nb-c-table__body">
                  <tr className="nb-c-table__row">
                    <td className="nb-c-table__cell" data-label="Name">John Smith</td>
                    <td className="nb-c-table__cell" data-label="Email">
                      <a href="" className="nb-c-table__link">john@smith.com</a>
                    </td>
                  </tr>
                  <tr className="nb-c-table__row">
                    <td className="nb-c-table__cell" data-label="Name">Jack Sparrow</td>
                    <td className="nb-c-table__cell" data-label="Email">
                      <a href="" className="nb-c-table__link">jack@sparrow.com</a>
                    </td>
                  </tr>
                  <tr className="nb-c-table__row">
                    <td className="nb-c-table__cell" data-label="Name">John Smith</td>
                    <td className="nb-c-table__cell" data-label="Email">
                      <a href="" className="nb-c-table__link">john.smith@sainsburys.co.uk</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2>Sortable Table</h2>
            <div className="nb-c-table-container">
              <table className="nb-c-table nb-c-table--sorted nb-c-table--stack@max-md">
                <thead className="nb-c-table__header" aria-label="Sort by">
                  <tr className="nb-c-table__row nb-c-table__header-row ">
                    <th className="nb-c-table__header-cell nb-c-table__header-cell--sortable">
                      <button className="nb-c-table__sort-button is-active js-sort-button">
                        <span className="nb-c-table__sort-text" aria-label="Sort by">Name</span>
                      </button>
                    </th>
                    <th className="nb-c-table__header-cell nb-c-table__header-cell--sortable">
                      <button className="nb-c-table__sort-button js-sort-button">
                        <span className="nb-c-table__sort-text" aria-label="Sort by">Email</span>
                      </button>
                    </th>
                    <th className="nb-c-table__header-cell">Grade</th>
                  </tr>
                </thead>
                <tbody className="nb-c-table__body">
                  <tr className="nb-c-table__row">
                    <td className="nb-c-table__cell" data-label="Name">John Smith</td>
                    <td className="nb-c-table__cell" data-label="Email">john.smith@sainsburys.co.uk</td>
                    <td className="nb-c-table__cell" data-label="Grade">C1</td>
                  </tr>
                  <tr className="nb-c-table__row">
                    <td className="nb-c-table__cell">Jack Sparrow</td>
                    <td className="nb-c-table__cell">jack.sparrow@sainsburys.co.uk</td>
                    <td className="nb-c-table__cell" data-label="Grade">C1</td>
                  </tr>
                  <tr className="nb-c-table__row">
                    <td className="nb-c-table__cell">John Smith</td>
                    <td className="nb-c-table__cell">john.smith@sainsburys.co.uk</td>
                    <td className="nb-c-table__cell" data-label="Grade">C1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
