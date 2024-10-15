import stellarImage from './assets/images/stellar-foundation.svg'
import polygonImage from './assets/images/polygon-technology.svg'
import chainlinkImage from './assets/images/chainlink-foundation.svg'
import binanceImage from './assets/images/binance.svg'
import cosmosImage from './assets/images/cosmos.svg'

const data = [
    {
      id: 1,
      job: 'Senior Software Engineer Solidity',
      icon: stellarImage,
      company: 'Stellar Foundation',
      location: 'Remote',
      salaryRange: {
        min: 60,
        max: 100,
      },
      jobRole: 'Developer',
      status: 'Promoted',
      stats: {
        applicants: 144,
        timeElapsed: 3,
        responsibilities: [
          "Design and develop user interfaces for web applications",
          "Collaborate with backend developers to integrate frontend components",
          "Stay updated on the latest frontend technologies and trends"
        ],
        idealCandidate: 'We are seeking a talented frontend developer with strong skills in HTML, CSS, and JavaScript. Experience with modern frameworks like React or Angular is a plus.'
      }
    },
    {
        id: 2,
        job: 'UI/UX Senior Designer',
        icon: polygonImage,
        company: 'Polygon Technology',
        location: 'New York',
        salaryRange: {
          min: 60,
          max: 100,
        },
        jobRole: 'UI/UX Design',
        status: 'Promoted',
        stats: {
          applicants: 144,
          timeElapsed: 3,
          responsibilities: [
            "Work with stakeholders to identify requirements",
            "Research customers, competitors, and products",
            "Develop smart contracts using Solidity",
            "Conduct code reviews",
            "Ensure the security of the blockchain application"
          ],
          idealCandidate: 'We are looking for a seasoned Solidity developer with experience in building decentralized applications. Strong understanding of blockchain technology, smart contract security, and familiarity with Ethereum ecosystem is required.'
        }
    },
    {
      id: 3,
      job: 'Backend Developer',
      icon: chainlinkImage,
      company: 'Chainlink Foundation',
      location: 'Remote',
      salaryRange: {
        min: 700,
        max: 1200,
      },
      jobRole: 'Developer',
      status: 'Promoted',
      stats: {
        applicants: 150,
        timeElapsed: 2,
        responsibilities: [
          "Develop server-side logic and APIs for web applications",
          "Work with databases and data management systems",
          "Optimize application performance and scalability"
        ],
        idealCandidate: 'We are looking for a skilled backend developer with experience in languages like Python, Java, or Node.js. Knowledge of cloud platforms and microservices architecture is a plus.'
      }
    },
    {
      id: 4,
      job: 'Head of Developer Relations',
      icon: binanceImage,
      company: 'Binance US',
      location: 'HoneyBricks',
      salaryRange: {
        min: 45,
        max: 75,
      },
      jobRole: 'H. Relations',
      status: 'Promoted',
      stats: {
        applicants: 180,
        timeElapsed: 4,
        responsibilities: [
          "Design user interfaces that are visually appealing and user-friendly",
          "Conduct user research and usability testing",
          "Create wireframes, prototypes, and mockups"
        ],
        idealCandidate: 'We are seeking a talented UI/UX designer with a strong portfolio and a passion for creating exceptional user experiences.'
      }
    },
    {
      id: 5,
      job: 'Senior Product Manager',
      icon: cosmosImage,
      company: 'Cosmos Blockchain',
      location: 'Remote',
      salaryRange: {
        min: 800,
        max: 1300,
      },
      jobRole: 'H. Relations',
      status: 'Promoted',
      stats: {
        applicants: 120,
        timeElapsed: 5,
        responsibilities: [
          "Define product vision and strategy",
          "Gather and analyze user feedback",
          "Collaborate with development teams to deliver products"
        ],
        idealCandidate: 'We are looking for a product manager with a strong track record of delivering successful products. Excellent communication and leadership skills are essential.'
      }
    }
  ];

  export default data;