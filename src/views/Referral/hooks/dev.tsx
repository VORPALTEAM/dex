export const defaultApiUrl = "https://staging-api.vorpal.finance/api"
export const defaultCreatorPercent = 10
export const defaultReferralPercent = 90


export async function CreateLink (
    creator : string, 
    CreatorPercent : number, 
    RefPercent : number) {
    const linkData = await fetch(`${defaultApiUrl}`,
    {
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     method: "POST",
     body: JSON.stringify({
          action: "CreateLink",
           owner:  creator,
           reward1: CreatorPercent,
           reward2: RefPercent
         })
    })
    const linksObject = await linkData.json();
    return linksObject
 }

 export async function RequestLinks ( creator : string ) {
     const linkData = await fetch(`${defaultApiUrl}`,
     {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
            action: "GetLinksByOwner",
            owner:  creator
          })
     })
     const linkResponse = await linkData.json()
     return linkResponse
 }

 export async function CreateUser (
    creator : string, 
    CreatorPercent : number = defaultCreatorPercent, 
    RefPercent : number = defaultReferralPercent ) {
        const isLinks = RequestLinks(creator)
    }

