class Table extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('src/data/users.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        *{
          box-sizing: border-box;
        }

        th, td {
          margin: 0;
        }

        .table {
          margin: 1rem 2rem;
          border-radius: 15px
        }

        .table-header {
          display: flex;
          justify-content: space-between;
          padding: 2rem 1rem 
        }

        .table-search input {
          padding: 1rem;
          border: 1px solid hsla(0, 0%, 0%, .3);
          border-radius: 10px;
          cursor: text
        }

        .table-search input::placeholder {
          color: hsla(0, 0%, 0%, .3)
        }

        .table-actions {
          display: flex;
          gap: 1rem
        }

        .table-selector select {
          padding: 1rem;
          border: 1px solid hsla(221, 100%, 64%, 1);
          border-radius: 10px;
          cursor: pointer
        }

        .table-selector option {
          padding: 1rem;
        }

        .table-button button {
          padding: 1rem;
          border: none;
          border-radius: 10px;
          background-color: hsla(221, 100%, 64%, 1);
          color:hsla(0, 0%, 100%, 1);
          font-weight: 600;
          cursor: pointer
        }

        table {
          width: 100%;
          text-align: center;
        }

        thead {
          background-color: hsla(210, 22%, 89%, .2);
        }

        thead th {
          padding: 1.3rem 0;
          border-top: 1px solid hsla(0, 0%, 0%, .1);
          border-bottom: 2px solid hsla(0, 0%, 0%, .1);
          font-size: .8rem;
          text-transform: uppercase
        }

        th input {
          cursor: pointer
        }

        tbody {

        }

        tbody th {
          padding: 1.3rem 0;
          font-size: .8rem;
        }

        tbody td.images {
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding: 1rem
        }

        td svg {
          height: 1.5rem;
          width: 1.5rem;
          cursor: pointer
        }
        
      </style>

      <section class="table">
        <div class="table-header">
          <div class="table-search">
            <input type="search" id="table-search" name="q" placeholder="Search 100 records..."/>
          </div>
          <div class="table-actions">
            <div class="table-selector">
              <select name="select">
                <option value="0" selected="selected">Sort by</option>
                <option value="1">Customer Name</option>
                <option value="2">Contact</option>
                <option value="3">Age</option>
                <option value="4">Country</option>
                <option value="5">Status</option>
                <option value="6">Actions</option>
              </select>
            </div>
            <div class="table-button">
              <button>+ Add Customer</button>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" id="cbox0" value="first_checkbox"/>
              </th>
              <th scope="col">#</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Age</th>
              <th scope="col">Country</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input type="checkbox" id="cbox1" value=""/>
              </th>
              <td>Dato1</td>
              <td>Dato2(hay2)</td>
              <td>Dato3</td>
              <td>Dato4</td>
              <td>Dato5</td>
              <td>Dato6</td>
              <td class="images">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill= "hsla(208, 10%, 50%, 1)"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill= "hsla(221, 100%, 65%, 1)"><title>note-edit-outline</title><path d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="hsla(0, 72%, 51%, 1)"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      `

    const table = this.shadow.querySelector('.table')
    const tableHeader = document.createElement('div')
    tableHeader.classList.add('table-header')
    table.appendChild(tableHeader)

    const tableSearch = document.createElement('div')
    tableSearch.classList.add('table-search')
    tableHeader.appendChild(tableSearch)

    const tableSearchElement = document.createElement('input')
    tableSearchElement.setAttribute('type', 'search')
    tableSearchElement.setAttribute('id', 'table-search')
    tableSearchElement.setAttribute('name', 'q')
    tableSearchElement.setAttribute('placeholder', 'Search 100 records...')
    tableSearch.appendChild(tableSearchElement)

    const tableActions = document.createElement('div')
    tableActions.classList.add('table-actions')
    tableHeader.appendChild(tableActions)

    const tableSelector = document.createElement('div')
    tableSelector.classList.add('table-selector')
    tableActions.appendChild(tableSelector)

    const tableSelectorElement = document.createElement('select')
    tableSelectorElement.setAttribute('name', 'select')
    tableSelector.appendChild(tableSelectorElement)
  }
}

customElements.define('table-component', Table)
