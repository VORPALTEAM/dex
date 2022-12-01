const backendUrlPort = ":3000"
const linksAll = "/referral-links/"
const linksByAddress = "/referral-links/find-by-address/"
const usersByAddress = "/users/find-by-address/"

let AddressUrl = document.location.protocol

AddressUrl = AddressUrl.concat("//")

AddressUrl = AddressUrl.concat(document.location.hostname)

AddressUrl = AddressUrl.concat(backendUrlPort)

export async function CreateLink (creator, CreatorPercent, RefPercent) {
   const linkData = await fetch(`${AddressUrl}/referral-links`,
   {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
	    creatorAddress: creator,
		 creatorPercent: CreatorPercent,
		 referralPercent: RefPercent
		})
   })
   const linksObject = await linkData.json();
   return linksObject
}
  
export async function CreateUser (account) {
   fetch(`${AddressUrl}/users`,
 {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
	    address: account,
		balance: "0x00",
		})
 })
 .then(function(res){  
   return account 
 })
 .catch(function(res){    
   console.log(res); 
   return "0x0000"
 })

}

export async function CheckUser (account) {
   let isUser = false
   const RequestUrl = `${AddressUrl}${usersByAddress}${account}`

   const response = await fetch(RequestUrl);
   const linksObject = await response.json();
   if (linksObject.user) {
      isUser = true   
   } 
   return isUser
}

export async function RequestLinks (account) {

   const RequestUrl = `${AddressUrl}${linksByAddress}${account}`
   const refLinks = []

      const response = await fetch(RequestUrl);
      const linksObject = await response.json();
      if (linksObject.refLinks) {
        refLinks.push(linksObject.refLinks._id)
      }
      return refLinks

}


export async function RoughRequestLinks (account) {

  const RequestUrl = `${AddressUrl}${linksAll}`
  const refLinks = []

     const response = await fetch(RequestUrl);
     const linksObject = await response.json();

     if (linksObject.refLinks) {
        linksObject.refLinks.forEach((link) => {
           if (link.creatorAddress === account) {
             refLinks.push(link._id)
           }
        })
     } 
     return refLinks

}