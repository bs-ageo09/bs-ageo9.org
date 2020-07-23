import { Events, Address, Paper } from './models'

export class SpreadsheetRepository {
  findEventsList(): Events[] {
    const rows =  SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName('event')
      .getDataRange()
      .getValues()
    const keys = rows.splice(0, 1)[0]

    return rows.map(row => {
      let obj = {}
      row.forEach((item, index) => {
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
    const rows =  SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName('address')
      .getDataRange()
      .getValues()
    const keys = rows.splice(0, 1)[0]

    return rows.map(row => {
      let obj = {}
      row.forEach((item, index) => {
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
    const rows =  SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName('paper')
      .getDataRange()
      .getValues()
    const keys = rows.splice(0, 1)[0]

    return rows.map(row => {
      let obj = {}
      row.forEach((item, index) => {
        obj[keys[index]] = item
      })
      Logger.log(obj)
      return new Paper(
        obj['index'],
        obj['is_valid'],
        obj['link'],
        obj['name']
      )
    })
  }

  findOthersValueByKey(key: string): string {
    const rows =  SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName('other')
      .getDataRange()
      .getValues()

    for (const row of rows) {
      if (row[0] === key) {
        return row[1]
      }
    }

    return ""
  }
}