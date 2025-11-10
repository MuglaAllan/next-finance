
import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';

const alovaInstance = createAlova({
  requestAdapter: adapterFetch(),
  responded: response => response.json()
});

const cik = '0000320193';

async function getSecfacts() {
    // 
    // What I need to do.....
    // Let's make an attempt to query the sec for the fileings for apple.
    // .. then diesplay the informaiton in a graph like example.
    
    const response = await alovaInstance.Get(`https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json`, {
                                headers: {
                                    'User-Agent': 'aspister@gmail.com',
                                    'Access-Control-Allow-Origin': "*",
                                    "Access-Control-Allow-Methods": "GET",
                                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                                }
                            });
    console.log(`RESPONSE : ${response}`);
    return response;
}

// async function getSecFileings() {
//     // 
//     // What I need to do.....
//     // Let's make an attempt to query the sec for the fileings for apple.
//     // .. then diesplay the informaiton in a graph like example.
//     const response = await alovaInstance.Get(`https://data.sec.gov/submissions/CIK${cik}.json`, {
//                                 headers: {
//                                     'User-Agent': 'aspister@gmail.com',
//                                     'Access-Control-Allow-Origin': "*",
//                                     "Access-Control-Allow-Methods": "GET",
//                                     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
//                                 }
//                             });
//     console.log(`RESPONSE : ${response}`);
//     return response;
// }

export default async function Page() {
  const posts = await getSecfacts();
  
  return (
    <ul>
      { Object.entries(posts).map(([key, value]) => {
        let val = 'object';
        if (typeof value == 'string') val = value
        return(<li>{key} - {val}</li>);
      })}

      { Object.entries(posts['facts']).map(([key, value]) => {
        let val = 'object';
        if (typeof value == 'string') val = value
        return(<li>{key} - {val}</li>);
      })}

      { Object.entries(posts['facts']['dei']['EntityCommonStockSharesOutstanding']).map(([key, value]) => {
        let val = 'object';
        if (typeof value == 'string') val = value
        return(<li>{key} - {val}</li>);
      })}

      { Object.entries(posts['facts']['dei']['EntityCommonStockSharesOutstanding']['units']).map(([key, value]) => {
        let val = 'object';
        if (typeof value == 'string') val = value
        return(<li>{key} - {val}</li>);
      })}

      { Object.entries(posts['facts']['dei']['EntityCommonStockSharesOutstanding']['units']['shares']).map(([key, value]) => {
        let val = 'object';
        if (typeof value == 'string') {val = value} else val = JSON.stringify(value);
        return(<li>{key} - {val}</li>);
      })}


      {/* 
        Next step is to generate a graph with the dataset
        Once this is done then refinement will happen.
      */}
    </ul>
  )
}