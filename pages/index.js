import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../components/layout.module.css'
import Tag from '../components/tag'

export default function Home({ allPostsData }) {
    const mytag='全部,自然農,生米パン,プログラミング,シンプルな生活';
    return (
        <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
            香港から来ました。大阪高槻在住。自由自在な生活スタイルを模索中。
            今持続性がある自然農とシンプルなプログラミングを勉強しています。
            学んだ知識を皆さんにシェアしたいと思います。
            
        </p>
        <p>
          <div>↓↓ 私について、下記のリンクを ↓↓</div>{' '}
          <a href="https://johnnysan.info" target='_blank'>Johnnyの電子名刺</a>
        </p>
        <blockquote>
            <p>
            このサイトの公式参考レシピは→{' '}
            <a href="https://nextjs.org/learn">Next.js</a>です.
            <br />
            Myブログを作成したい方、ぜひ見てみてください！
            </p>
        </blockquote>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h3 className={utilStyles.headingLg}>My Blog Collection</h3>
        <Tag tag={mytag}/>
        <br />
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, thumb, tag }) => (
              <li className={utilStyles.listItem} key={id}>
                <div className={utilStyles.postbox}>
                    <div className={utilStyles.postboxpic}>
                        <img src={thumb} className={utilStyles.postthumb} alt="Post" />
                    </div>
                    <div className={utilStyles.postboxcontent}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                            <Tag tag={tag} />
                        </small>
                    </div>
                </div>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }   
  } 
}

