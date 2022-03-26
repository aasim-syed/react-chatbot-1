import React from 'react'
import Faq from 'react-faq-component'
import { Container, Jumbotron } from 'react-bootstrap'

const data = {
  title: 'FAQs of G2C2⚡🚀',
  rows: [
    {
      title: 'How does the G2C2⚡🚀 work ?',
      content: `To  go to the official website  `,
    },
    {
      title:
        'How long it take to get information verified',
      content: `Within a 30 mins after submitting the details.`,
    },
    {
      title: 'How to get info regarding floods',
      content: `Through the push notfication `,
    },
    {
      title: 'What is the process behind it',
      content: `AI😌⚡🚀 and some cutting edge tech`,
    },
    {
      title:
        'Is it compulsory for the professionals enumerated in Schedule 1 to get enrolled?',
      content: `Yes, A person already enrolled need not
      apply for enrolment again.`,
    },
    {
      title: 'What is the method of payment?',
      content: `Payment can be made at any City Civic
      Center by cash or a cheque/Demand Draft in
      Favor of "Municipal CommissionerAhmedabad" payable at Ahmedabad or
      ONLINE Payment.`,
    },
  ],
  title: 'FAQs municipal corporation',
  rows: [
    {
      title: 'How to search Death–Birth certificate online ?',
      content: `To search the certificate online go to RMC official website
      `,
    },
    {
      title:
        'How long it takes to make correction in a Birth/Death Certificate?',
      content: `Within a 15 days after submitting the application.`,
    },
    {
      title: 'How to get Birth and Death Certificate in English?',
      content: `It can be avail from the City Civic Centre run by AMC. From the available Gujarati
      data, English translation can be done.`,
    },
    {
      title: 'What is the Designated Authority?',
      content: `A Designated Authority is the authority
      which levies and collects the tax from a
      person liable to pay professional tax.`,
    },
    {
      title:
        'Is it compulsory for the professionals enumerated in Schedule 1 to get enrolled?',
      content: `Yes, A person already enrolled need not
      apply for enrolment again.
      `,
    },
    {
      title: 'What is the method of payment?',
      content: `Payment can be made at any City Civic
      Center by cash or a cheque/Demand Draft in
      Favor of "Municipal CommissionerAhmedabad" payable at Ahmedabad or
      ONLINE Payment.`,
    },
  ],
}

const styles = {
  bgColor: '#303030',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: 'white',
  arrowColor: 'white',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '10px',
  rowContentPaddingRight: '10px',
}

const config = {
  animate: true,
  arrowIcon: 'v',
  // tabFocus: true,
}

const faq = () => {
  return (
    <Container>
      <Jumbotron>
        <Faq data={data} styles={styles} config={config} />
      </Jumbotron>
    </Container>
  )
}

export default faq
