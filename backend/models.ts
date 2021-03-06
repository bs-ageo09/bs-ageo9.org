export class Events {
  index: number
  isInformation: boolean
  eventName: string
  heading: string
  date: string
  text: string
  docLink: string
  docPreview: string
  docName: string

  constructor(
    index: number,
    isInformation: boolean,
    eventName, heading, date, text, docLink, docPreview, docName: string) {
    this.index = index
    this.isInformation = isInformation
    this.eventName = eventName
    this.heading = heading
    this.date = date
    this.text = text
    this.docLink = docLink
    this.docPreview = docPreview
    this.docName = docName
  }

  toJSON() {
    return {
      event_name: this.eventName,
      heading: this.heading,
      date: this.date,
      text: this.text,
      doc_link: this.docLink,
      doc_preview: this.docPreview,
      doc_name: this.docName,
    }
  }
}

export class Address {
  rank: string
  name: string
  nameHira: string
  number: string
  type: string

  constructor(
    rank, name, nameHira, number, type: string) {
    this.rank = rank
    this.name = name
    this.nameHira = nameHira
    this.number = number
    this.type = type
  }

  toJSON() {
    return {
      rank: this.rank,
      name: this.name,
      name_hira: this.nameHira,
      number: this.number,
      type: this.type
    }
  }
}

export class Paper {
  index: number
  isValid: boolean
  link: string
  name: string

  constructor(index: number, isValid: boolean, link, name: string) {
    this.index = index
    this.isValid = isValid
    this.link = link
    this.name = name
  }

  toJSON() {
    return {
      link: this.link,
      name: this.name
    }
  }
}

