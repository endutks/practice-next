/*import {getPosts} from '@/lib/posts'
import {Post} from '@/ui/post'*/
import Link from "next/link"

export default function Page() {
    //const posts = await getPosts()

    return(
        <div>
            <h1>blog!</h1>
            <br></br>
            <Link href={'/'}>TOP</Link>
        </div>
    )
}