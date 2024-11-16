//dynamic route : ->

// export default async function Page({ params }) {
//     console.log(params)
//     return <div>I am about page : check console</div>
// }
//above function not working correctly or as we needed...


export default async function Page({ params }) {
    // Await for the values of url after /about/[...val] in an array...!
    const { val } = await params;
    console.log(val)
    
    //to extract the first segment of val
    const slug = Array.isArray(val) ? val[1] : val;
    console.log(slug); // Should log 'python'
    return <div>I am about page: check console</div>;
}
