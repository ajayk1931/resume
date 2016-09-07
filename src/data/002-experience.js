/**
 * Created by andy on 9/7/16.
 */

/*
Declare experience objects with the following schema:
  {
    title: "",
    company: "",
    companyLink: "",
    location: "",
    startDate: "",
    endDate: null,
    notes: ``
  }

 */

export default [
  {
    title: "Undergraduate Research Assistant",
    company: "Georgia Institute of Technology",
    companyLink: "http://www.cse.gatech.edu/",
    location: "Atlanta, GA",
    startDate: "Oct. 2015",
    endDate: null,
    notes: `
Research in data mining with professor Polo Chau.

- MMap: Scaling up scientific computation with memory mapping
- ARGO: Billion-scale visualization of network data
`,
    featured: true
  }, {
    title: "STAR Intern on Software Engineering",
    company: "Symantec Corporation",
    companyLink: "https://www.symantec.com/theme/star",
    location: "Los Angeles, CA",
    startDate: "May. 2016",
    endDate: "Aug. 2016",
    notes: `
Utilizing data mining (with Hadoop and Python) to improve malware detection efficacy.

- Inferring unknown files' reputations with parent file and execution environment features.
- Deployed new rule in Symantec's AV Engine with a false positive rate of only 0.2%. Used in Norton Security and Symantec Endpoint Protection. 
- Implemented a decision tree executor for detecting malware using file features that replaced Symantec's existing implementation.
`,
    featured: true
  }

];
