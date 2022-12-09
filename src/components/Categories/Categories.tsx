import { Link } from 'gatsby'

export interface CategotriesProps {
  selectedCategory: string
  categoryList: Record<string, number>
}

export const Categories = ({ selectedCategory, categoryList }: CategotriesProps) => {
  console.log(Object.entries(categoryList))

  return (
    <div className="flex gap-4">
      {Object.entries(categoryList).map(([category, count]) => (
        <Link
          key={category}
          to={`?category=${category}`}
          activeClassName="text-pink"
        >{`#${category}(${count})`}</Link>
      ))}
    </div>
  )
}
