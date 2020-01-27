import { Events, Address, Paper } from './models'

export class SpreadsheetRepository {
  id: string

  constructor(id: string) {
    this.id = id
  }

  findEventsList(): Events[] {
    const sheet = SpreadsheetApp.openById(this.id).getSheetByName('event')
    const rows = sheet.getDataRange().getValues()
    const keys = rows.splice(0, 1)[0]

    return rows.map(row => {
      let obj = {}
      row.map((item, index) => {
        obj[keys[index]] = item
      })
      Logger.log(obj)
      return new Events(
        obj['index'],
        obj['is_information'],
        obj['event_name'],
        obj['heading'],
        obj['date'],
        obj['text'],
        obj['doc_link'],
        obj['doc_preview'],
        obj['doc_name']
      )
    })
  }

  findAddressList(): Address[] {
    const sheet = SpreadsheetApp.openById(this.id).getSheetByName('address')
    const rows = sheet.getDataRange().getValues()
    const keys = rows.splice(0, 1)[0]

    return rows.map(row => {
      let obj = {}
      row.map((item, index) => {
        obj[keys[index]] = item
      })
      Logger.log(obj)
      return new Address(
        obj['rank'],
        obj['name'],
        obj['name_hira'],
        obj['number'],
        obj['type']
      )
    })
  }

  findPaperList(): Paper[] {
    const sheet = SpreadsheetApp.openById(this.id).getSheetByName('paper')
    const rows = sheet.getDataRange().getValues()
    const keys = rows.splice(0, 1)[0]

    return rows.map(row => {
      let obj = {}
      row.map((item, index) => {
        obj[keys[index]] = item
      })
      Logger.log(obj)
      return new Paper(
        obj['link'],
        obj['name']
      )
    })
  }

  findByKey(key: string): string {
    const sheet = SpreadsheetApp.openById(this.id).getSheetByName('other')
    const rows = sheet.getDataRange().getValues()

    let val: string
    for (const row of rows) {
      val = row[1]
      if (row[0] === key) {
        break
      }
    }

    return val
  }
}