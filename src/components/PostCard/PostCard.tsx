import { Link, navigate } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface PostCardProps {
  slug: string
  title: string
  summary: string
  date: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export const PostCard = ({ title, summary, date, slug, thumbnail }: PostCardProps) => {
  return (
    <div
      className="overflow-hidden rounded border border-t-0 bg-slate-50 shadow-md transition-all hover:translate-y-1 hover:shadow-lg dark:border-0 dark:bg-slate-700"
      onClick={() => {
        navigate(slug)
      }}
    >
      <GatsbyImage image={thumbnail.childImageSharp.gatsbyImageData} alt="thumnail" />

      <div className="p-6 text-slate-800 dark:text-slate-200">
        <Link to="/">
          <h4 className="mb-4 font-semibold">{title}</h4>
          <p className="mb-2 overflow-hidden text-sm line-clamp-3">{summary}</p>
        </Link>

        <small>{date}</small>
      </div>
    </div>
  )
}
