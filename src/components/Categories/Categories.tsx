import { Link } from 'gatsby'

import { Box } from 'src/elements'

export interface CategotriesProps {
  selectedCategory: string
  categoryList: Record<string, number>
}

export const Categories = ({ selectedCategory, categoryList }: CategotriesProps) => {
  console.log(Object.entries(categoryList))

  return (
    <Box className="flex gap-4">
      {Object.entries(categoryList).map(([category, count]) => (
        <Link
          key={category}
          to={`?category=${category}`}
          activeClassName="text-pink"
        >{`#${category}(${count})`}</Link>
      ))}
    </Box>
  )
}
