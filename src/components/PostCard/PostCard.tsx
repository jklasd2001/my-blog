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
      className="overflow-hidden rounded border bg-gray-700 shadow-md transition-all hover:translate-y-1 hover:shadow-lg dark:border-0"
      onClick={() => {
        navigate(slug)
      }}
    >
      <GatsbyImage image={thumbnail.childImageSharp.gatsbyImageData} alt="thumnail" />
      <div className="p-6 text-slate-800 dark:text-slate-200">
        <Link to="/">
          <h5>{title}</h5>
          <p>{summary}</p>
        </Link>

        <div>
          <span>{date}</span>
        </div>
      </div>
    </div>
  )
}
