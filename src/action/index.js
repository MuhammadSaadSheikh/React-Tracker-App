// export const handleName = (name) => {
//   return {
//     type: 'UpdatedName',
//     payload: name
//   }
// }

//promise method 
// export const handleName = () => {
//   return (data) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => console.log(res) )
    
//     // .then(doc => {
//     //   {data({type: 'UpdatedName', payload : doc[0].name})}
//     // })
//   }
// }

//async method
export const handleName = () => {
  return async(api) => {   
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const doc = await response.json()
      {api({type: 'UpdatedName' , payload : doc[0].name})}
  }
}
