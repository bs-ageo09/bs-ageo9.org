import { DataUsecase } from './usecase'

const jsonResponse = response => {
  ContentService.createTextOutput()
  let output = ContentService.createTextOutput()
  output.setMimeType(ContentService.MimeType.JSON)
  output.setContent(JSON.stringify(response))

  return output
}

function doGet(e) {
  const type: string = e.parameter.type
  const uc = new DataUsecase()
  switch (type) {
    case 'event':
      return jsonResponse(uc.collectEvents())

    case 'address':
      return jsonResponse(uc.collectAddress())

    case 'paper':
      return jsonResponse(uc.collectPaper())
  }

  return jsonResponse({
    msg: 'resource not found'
  })
}