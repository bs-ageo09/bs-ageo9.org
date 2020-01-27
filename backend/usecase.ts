import { Events, Address, Paper } from './models'
import { SpreadsheetRepository } from './repository'

const sheetID = PropertiesService.getScriptProperties().getProperty('SHEET_ID');

export class DataUsecase {
  constructor() {
  }

  collectEvents(): Events[] {
    const repo = new SpreadsheetRepository(sheetID)

    return repo.findEventsList()
      .filter(event => {
        return event.isInformation
      })
  }

  collectAddress(): Address[] {
    const repo = new SpreadsheetRepository(sheetID)
    return repo.findAddressList()
  }

  collectPaper(): Paper[] {
    const repo = new SpreadsheetRepository(sheetID)
    return repo.findPaperList()
  }

  getAnnouncement() {
    const repo = new SpreadsheetRepository(sheetID)
    return {
      url: repo.findOthersValueByKey('announcement_pdf')
    }
  }
}