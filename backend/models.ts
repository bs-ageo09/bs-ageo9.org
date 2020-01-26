export class Events {
  index: number
  isInformation: boolean
  eventName: string
  heading: string
  date: string
  text: string
  docLink: string
  docName: string

  constructor(
    index: number,
    isInformation: boolean,
    eventName, heading, date, text, docLink, docName: string) {
    this.index = index
    this.isInformation = isInformation
    this.eventName = eventName
    this.heading = heading
    this.date = date
    this.text = text
    this.docLink = docLink
    this.docName = docName
  }

  toJSON() {
    return {
      index: this.index,
      event_name: this.eventName,
      heading: this.heading,
      date: this.date,
      text: this.text,
      doc_link: this.docLink,
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
  link: string
  name: string

  constructor(link, name: string) {
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

