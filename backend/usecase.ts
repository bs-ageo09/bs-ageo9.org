import { Events, Address, Paper } from './models'
import { SpreadsheetRepository } from './repository'

const sheetID = PropertiesService.getScriptProperties().getProperty('SHEET_ID');

export class DataUsecase {
  constructor() {
  }

  collectEvents(): Events[] {
    const repo = new SpreadsheetRepository(sheetID)

    return repo.findEventsList()
      .filter(item => {
        return item.isInformation
      })
      .sort(item => {
        return item.index
      })
  }

  collectAddress(): Address[] {
    const repo = new SpreadsheetRepository(sheetID)
    return repo.findAddressList()
  }

  collectPaper(): Paper[] {
    const repo = new SpreadsheetRepository(sheetID)
    return repo.findPaperList()
      .filter(item => {
        return item.isValid
      })
      .sort(item => {
        return item.index
      })
  }

  getOtherVal(key: string) {
    const repo = new SpreadsheetRepository(sheetID)
    return {
      val: repo.findOthersValueByKey(key)
    }
  }
}