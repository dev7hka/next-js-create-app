import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { useEffect } from "react";

const FirstPost = () => {

    useEffect(() => {
        async function fetchMessage() {
        const message = await fetch("http://localhost:3000/api/hello").then(res => res.json()).then(res => alert(res.text));
        }
        // fetchMessage();
    }, []);

    return <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <div>This is the First Post Page</div>
        <div>Go Back to <Link href="/">Main Page</Link></div>
        </Layout>
}

export default FirstPost;
