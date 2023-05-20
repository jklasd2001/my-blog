import { Link } from 'gatsby'
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
    <Link
      to={slug}
      className="border-1 flex flex-col overflow-hidden rounded-lg p-4 shadow-md transition-all hover:translate-y-1 hover:shadow-lg dark:bg-slate-700"
    >
      <GatsbyImage
        image={thumbnail.childImageSharp.gatsbyImageData}
        alt="thumnail"
        className="max-h-[320px] rounded-lg"
      />

      <div className="mt-2 flex flex-col gap-4 text-slate-800 dark:text-slate-200">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <time className="text-gray-500">{date}</time>
        <p className="line-clamp-3 overflow-hidden text-lg">{summary}</p>
      </div>
    </Link>
  )
}
