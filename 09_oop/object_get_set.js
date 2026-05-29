const accDetails = {
  _bankingName: 'Marco Venkateshwara',
  _accountNumber: 890225544852014,
  _bankName: 'Quadra Bank',
  _IFSCCode: 'QB0987',

  get bankingName() {
    return this._bankingName.toUpperCase()
  },

  set bankingName(value) {
    this._bankingName = value
  }
}

const MarcoV = Object.create(accDetails)
console.log(MarcoV.bankingName)