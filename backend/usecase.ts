import { Events, Address, Paper } from './models'
import { SpreadsheetRepository } from './repository'

export class DataUsecase {
  constructor() {
  }

  collectEvents(): Events[] {
    const repo = new SpreadsheetRepository()

    return repo.findEventsList()
      .filter(item => {
        return item.isInformation
      })
      .sort((a, b) => {
        return (a.index - b.index)
      })
  }

  collectAddress(): Address[] {
    const repo = new SpreadsheetRepository()
    return repo.findAddressList()
  }

  collectPaper(): Paper[] {
    const repo = new SpreadsheetRepository()
    return repo.findPaperList()
      .filter(item => {
        return item.isValid
      })
      .sort((a, b) => {
        return (a.index - b.index)
      })
  }

  getOtherVal(key: string) {
    if (!key) {
      return {
        val: null
      }
    }
    const repo = new SpreadsheetRepository()
    return {
      val: repo.findOthersValueByKey(key)
    }
  }
}