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
          height: 100vh;
          margin: 1rem 2rem 2rem 2rem;
          border-radius: 15px
        }

        theader {
          display: flex;
          justify-content: space-between;
          padding: 2rem 1rem 
        }

        .table-search {
          display: flex
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

        th input[type="checkbox"] {
          height: 1rem;
          width: 1rem;
          cursor: pointer
        }

        tbody th {
          padding: 1.3rem 0;
          font-size: .8rem;
        }

        .td-duplette {
          display: flex;
          flex-direction: column;
          align-content: center
        }

        td.primary {
          font-weight: 600
        }

        td.verified span {
          padding: .3rem 1rem;
          border-radius: 25px;
          background-color: hsla(163, 35%, 92%, 1);
          color: hsla(159, 25%, 47%, 1);
        }

        td.rejected span {
          padding: .3rem 1rem;
          border-radius: 25px;
          background-color: hsla(352, 100%, 93%, 1);
          color: hsla(356, 53%, 37%, 1)
        }
        
        td.pending span {
          padding: .3rem 1rem;
          border-radius: 25px;
          background-color: hsla(166, 51%, 94%, 1);
          color: hsla(181, 43%, 60%, 1)
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

      <section class="table"></section>
      `

    const table = this.shadow.querySelector('.table')
    const tableHeader = document.createElement('theader')
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

    const optionElement0 = document.createElement('option')
    optionElement0.setAttribute('value', '0')
    optionElement0.setAttribute('selected', 'selected')
    optionElement0.textContent = 'Sort by'
    tableSelectorElement.appendChild(optionElement0)

    const optionElement1 = document.createElement('option')
    optionElement1.setAttribute('value', '1')
    optionElement1.textContent = 'Costumer name'
    tableSelectorElement.appendChild(optionElement1)

    const optionElement2 = document.createElement('option')
    optionElement2.setAttribute('value', '2')
    optionElement2.textContent = 'Contact'
    tableSelectorElement.appendChild(optionElement2)

    const optionElement3 = document.createElement('option')
    optionElement3.setAttribute('value', '3')
    optionElement3.textContent = 'Age'
    tableSelectorElement.appendChild(optionElement3)

    const optionElement4 = document.createElement('option')
    optionElement4.setAttribute('value', '4')
    optionElement4.textContent = 'Country'
    tableSelectorElement.appendChild(optionElement4)

    const optionElement5 = document.createElement('option')
    optionElement5.setAttribute('value', '5')
    optionElement5.textContent = 'Status'
    tableSelectorElement.appendChild(optionElement5)

    const optionElement6 = document.createElement('option')
    optionElement6.setAttribute('value', '6')
    optionElement6.textContent = 'Actions'
    tableSelectorElement.appendChild(optionElement6)

    const tableButton = document.createElement('div')
    tableButton.classList.add('table-button')
    tableActions.appendChild(tableButton)

    const tableButtonElement = document.createElement('button')
    tableButtonElement.textContent = '+ Add Customer'
    tableButton.appendChild(tableButtonElement)

    const tableElement = document.createElement('table')
    table.appendChild(tableElement)

    const theaderElement = document.createElement('thead')
    tableElement.appendChild(theaderElement)

    const trHeaderElement = document.createElement('tr')
    theaderElement.appendChild(trHeaderElement)

    const thHeaderElement0 = document.createElement('th')
    thHeaderElement0.setAttribute('scope', 'col')
    trHeaderElement.appendChild(thHeaderElement0)

    const thHeaderInputElement = document.createElement('input')
    thHeaderInputElement.setAttribute('type', 'checkbox')
    thHeaderInputElement.setAttribute('id', 'cbox1')
    thHeaderInputElement.setAttribute('value', '')
    thHeaderElement0.appendChild(thHeaderInputElement)

    const thHeaderElement1 = document.createElement('th')
    thHeaderElement1.setAttribute('scope', 'col')
    thHeaderElement1.textContent = '#'
    trHeaderElement.appendChild(thHeaderElement1)

    const thHeaderElement2 = document.createElement('th')
    thHeaderElement2.setAttribute('scope', 'col')
    thHeaderElement2.textContent = 'customer name'
    trHeaderElement.appendChild(thHeaderElement2)

    const thHeaderElement3 = document.createElement('th')
    thHeaderElement3.setAttribute('scope', 'col')
    thHeaderElement3.textContent = 'contact'
    trHeaderElement.appendChild(thHeaderElement3)

    const thHeaderElement4 = document.createElement('th')
    thHeaderElement4.setAttribute('scope', 'col')
    thHeaderElement4.textContent = 'age'
    trHeaderElement.appendChild(thHeaderElement4)

    const thHeaderElement5 = document.createElement('th')
    thHeaderElement5.setAttribute('scope', 'col')
    thHeaderElement5.textContent = 'country'
    trHeaderElement.appendChild(thHeaderElement5)

    const thHeaderElement6 = document.createElement('th')
    thHeaderElement6.setAttribute('scope', 'col')
    thHeaderElement6.textContent = 'status'
    trHeaderElement.appendChild(thHeaderElement6)

    const thHeaderElement7 = document.createElement('th')
    thHeaderElement7.setAttribute('scope', 'col')
    thHeaderElement7.textContent = 'actions'
    trHeaderElement.appendChild(thHeaderElement7)

    const tableBody = document.createElement('tbody')
    tableElement.appendChild(tableBody)

    this.data.forEach(element => {
      const trBodyElement = document.createElement('tr')
      tableBody.appendChild(trBodyElement)

      const thBodyElement = document.createElement('th')
      thBodyElement.setAttribute('scope', 'row')
      trBodyElement.appendChild(thBodyElement)

      const thBodyInputElement = document.createElement('input')
      thBodyInputElement.setAttribute('type', 'checkbox')
      thBodyInputElement.setAttribute('id', 'cbox1')
      thBodyInputElement.setAttribute('value', '')
      thBodyElement.appendChild(thBodyInputElement)

      const tdBodyElement0 = document.createElement('td')
      tdBodyElement0.textContent = element.id
      trBodyElement.appendChild(tdBodyElement0)

      const tdDuplette = document.createElement('div')
      tdDuplette.classList.add('td-duplette')
      trBodyElement.appendChild(tdDuplette)

      const tdBodyElement1 = document.createElement('td')
      tdBodyElement1.classList.add('primary')
      tdBodyElement1.textContent = element.name
      tdDuplette.appendChild(tdBodyElement1)

      const tdBodyElement2 = document.createElement('td')
      tdBodyElement2.textContent = element.email
      tdDuplette.appendChild(tdBodyElement2)

      const tdBodyElement3 = document.createElement('td')
      tdBodyElement3.textContent = element.telephone
      trBodyElement.appendChild(tdBodyElement3)

      const tdBodyElement4 = document.createElement('td')
      tdBodyElement4.textContent = element.age
      trBodyElement.appendChild(tdBodyElement4)

      const tdBodyElement5 = document.createElement('td')
      tdBodyElement5.textContent = element.country
      trBodyElement.appendChild(tdBodyElement5)

      const tdBodyElement6 = document.createElement('td')
      tdBodyElement6.classList.add(`${element.status}`)
      trBodyElement.appendChild(tdBodyElement6)

      const tdBodyElementSpan = document.createElement('span')
      tdBodyElementSpan.textContent = element.status
      tdBodyElement6.appendChild(tdBodyElementSpan)

      const tdBodyElement7 = document.createElement('td')
      tdBodyElement7.classList.add('images')
      trBodyElement.appendChild(tdBodyElement7)

      const image0 = document.createElement('td')
      image0.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill= "hsla(208, 10%, 50%, 1)"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>'
      tdBodyElement7.appendChild(image0)

      const image1 = document.createElement('td')
      image1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill= "hsla(221, 100%, 65%, 1)"><title>note-edit-outline</title><path d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z" /></svg>'
      tdBodyElement7.appendChild(image1)

      const image2 = document.createElement('td')
      image2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="hsla(0, 72%, 51%, 1)"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>'
      tdBodyElement7.appendChild(image2)
    })
  }
}

customElements.define('table-component', Table)
