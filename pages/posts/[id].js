import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilsStyles from '../../styles/utils.module.css'

export default function Post({postData}) {
    const thumblink = "https://johnnysan.info" + postData.thumb;
    // console.log(thumblink);
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta property="og:image" content={thumblink} />
                <meta name="og:title" content={postData.title} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <article>
                <h1>{postData.title}</h1>
                <div className={utilsStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}