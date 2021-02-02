import ArticleItem from './ArticleItem'

export default function ArticleList({ articles }) {
    return (
        <div>
            {articles.map(article => (
                <ArticleItem article={article} />
            ))}
        
        </div>
    )
}