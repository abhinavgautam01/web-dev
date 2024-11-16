//slug is a variable ; can take a variable from the url and access it
export default async function Page({ params }) {
    const slug = (await params).slug
    const languages = ["python", "javascript", "java", "c++", "cs"]
    
    if (languages.includes(slug)) {
        return <div>My Post: {slug}</div>;
    } else {
        return <div>Post not found...!</div>;
    }

    // const slug = (await params).slug
    // return <div>My Post: {slug}</div>
}
